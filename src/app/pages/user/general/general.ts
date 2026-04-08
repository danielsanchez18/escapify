import { Component } from '@angular/core';
import { ComponentUserGeneralVerifyEmail } from "@components/user/general/verify-email/verify-email";
import { ComponentUserGeneralDetailsUser } from "@components/user/general/details-user/details-user";
import { ComponentUserGeneralCountry } from "@components/user/general/country/country";

@Component({
  selector: 'page-user-general',
  imports: [
    ComponentUserGeneralVerifyEmail,
    ComponentUserGeneralDetailsUser,
    ComponentUserGeneralCountry
],
  templateUrl: './general.html',
})
export class PageUserGeneral { }
