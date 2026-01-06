import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenStorage } from '@core/auth/token-storage';
import { Company } from '@interfaces/enterprise.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { User } from '@interfaces/users.interface';
import { BranchService } from '@services/branch.service';
import { CompanyService } from '@services/company.service';
import { ImageService } from '@services/image.service';
import { UserService } from '@services/user.service';
import { Check, CircleCheck, ListFilter, LucideAngularModule, Minus, Tag, Users, MapPinHouse, Crown, CircleX, CircleMinus, ArrowDownUp, ChevronDown, Plus } from 'lucide-angular';


@Component({
  selector: 'component-user-dashboard-companies-list',
  imports: [
    CommonModule,
    LucideAngularModule,
    RouterLink

  ],
  templateUrl: './companies-list.html',
})
export class ComponentUserDashboardCompaniesList {

  readonly ArrowDownUp = ArrowDownUp;
  readonly ChevronDown = ChevronDown;
  readonly Plus = Plus;

  readonly ListFilter = ListFilter;
  readonly Check = Check;
  readonly Minus = Minus;
  readonly Tag = Tag;
  readonly CircleCheck = CircleCheck;
  readonly CircleX = CircleX;
  readonly CircleMinus = CircleMinus;
  readonly Users = Users;
  readonly MapPinHouse = MapPinHouse;
  readonly Crown = Crown;

  private companyService = inject(CompanyService);
  private branchService = inject(BranchService);
  private userService = inject(UserService);
  private imageService = inject(ImageService);


  companies: Company[] = [];
  searchByName: string = '';
  searchByTag: string = '';
  searchByCountry: string = '';
  searchByCurrency: string = '';
  startDate: string | null = null;
  endDate: string | null = null;
  enabled: boolean | null = null;
  deleted: boolean | null = null;
  page: number = 0;
  size: number = 5;
  sort: string = 'audit,desc';
  totalElements: number = 0;
  numberOfElements: number = 0;
  totalPages: number = 0;

  userMap: { [id: string]: User } = {};
  userPhotoMap: { [id: string]: string } = {};
  logoMap: { [companyId: string]: string } = {};
  branchCountMap: { [companyId: string]: number } = {};

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.search(
      this.searchByName,
      this.searchByTag,
      this.searchByCountry,
      this.searchByCurrency,
      this.startDate,
      this.endDate,
      this.enabled,
      this.deleted,
      this.page,
      this.size,
      this.sort
    ).subscribe(
      (response: PaginatedResponse<Company>) => {
        this.companies = response.data.content;
        this.totalElements = response.data.totalElements;
        this.totalPages = response.data.totalPages;
        this.calculateNumberOfElements();

        // Obtener IDs únicos de usuarios creadores
        const userIds = Array.from(new Set(this.companies.map(c => c.audit?.createdBy).filter(Boolean)));

        // Cargar usuarios y guardarlos en el mapa
        userIds.forEach(id => {
          if (!this.userMap[id]) {
            this.userService.getById(id).subscribe(
              (response: any) => {
                const user = response.data;
                this.userMap[id] = user;
                if (user.photoUrl) {
                  this.imageService.getProtectedImageUrl(user.photoUrl, token ?? '').then(blobUrl => {
                    this.userPhotoMap[id] = blobUrl;
                  });
                }
              },
              (error) => {
                console.error('Error al cargar usuario', error);
              }
            );
          }
        });

        const token = TokenStorage.getAccessToken();
        this.companies.forEach(company => {
          if (company.logoUrl) {
            this.imageService.getProtectedImageUrl(company.logoUrl, token ?? '').then(blobUrl => {
              this.logoMap[company.id!] = blobUrl;
            });
          }

          if (company.id) {
            this.branchService.getByCompanyId(company.id, 0, 1).subscribe(
              (response: any) => {
                this.branchCountMap[company.id!] = response.data.totalElements;
              },
              (error) => {
                this.branchCountMap[company.id!] = 0;
                console.error('Error al cargar sucursales', error);
              }
            );
          }
        });
      },
      (error) => {
        console.error('Error al cargar las empresas', error);
      }
    )
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.page = pageNumber;
      this.loadCompanies();
    }
  }

  calculateNumberOfElements(): void {
    this.numberOfElements = Math.min((this.page + 1) * this.size, this.totalElements);
  }

  // Método para limpiar la búsqueda desde el componente hijo
  clearSearch(): void {
    this.searchByName = '';
    this.loadCompanies();
  }

}
