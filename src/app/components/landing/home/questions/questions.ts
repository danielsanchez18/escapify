import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  isClosing: boolean;
}

@Component({
  selector: 'component-landing-home-questions',
  imports: [CommonModule],
  templateUrl: './questions.html',
})
export class ComponentLandingHomeQuestions {
  questions: Question[] = [
    {
      id: 1,
      question: '¿Qué es Escapify?',
      answer: 'Escapify es una plataforma integral de gestión empresarial que te ayuda a administrar todos los aspectos de tu escape room: reservas, clientes, inventario, finanzas y más, todo desde un solo lugar.',
      isOpen: false,
      isClosing: false
    },
    {
      id: 2,
      question: '¿Necesito conocimientos técnicos para usar Escapify?',
      answer: 'No, Escapify está diseñado para ser intuitivo y fácil de usar. No necesitas conocimientos técnicos previos. Además, ofrecemos soporte y capacitación para que puedas aprovechar al máximo todas las funcionalidades.',
      isOpen: false,
      isClosing: false
    },
    {
      id: 3,
      question: '¿Puedo acceder a Escapify desde cualquier dispositivo?',
      answer: 'Sí, Escapify es una aplicación web responsive que puedes acceder desde cualquier dispositivo con conexión a internet: computadora, tablet o smartphone.',
      isOpen: false,
      isClosing: false
    },
    {
      id: 4,
      question: '¿Mis datos están seguros?',
      answer: 'Absolutamente. Utilizamos los más altos estándares de seguridad en la industria, incluyendo encriptación de datos, copias de seguridad automáticas y cumplimiento con las normativas de protección de datos.',
      isOpen: false,
      isClosing: false
    },
    {
      id: 5,
      question: '¿Hay un período de prueba?',
      answer: 'Sí, ofrecemos un período de prueba gratuito de 14 días para que puedas explorar todas las funcionalidades de Escapify sin compromiso. No se requiere tarjeta de crédito para comenzar.',
      isOpen: false,
      isClosing: false
    },
    {
      id: 6,
      question: '¿Cómo funciona el sistema de reservas?',
      answer: 'Nuestro sistema de reservas permite a tus clientes reservar online 24/7. Incluye calendario en tiempo real, confirmaciones automáticas por email, gestión de pagos y recordatorios automáticos.',
      isOpen: false,
      isClosing: false
    }
  ];

  toggleQuestion(id: number): void {
    const question = this.questions.find(q => q.id === id);

    if (question?.isOpen) {
      // Si está abierta, activar animación de cierre
      this.questions = this.questions.map(q => ({
        ...q,
        isClosing: q.id === id ? true : false
      }));

      // Esperar a que termine la animación antes de cerrar
      setTimeout(() => {
        this.questions = this.questions.map(q => ({
          ...q,
          isOpen: false,
          isClosing: false
        }));
      }, 300); // Duración de la animación
    } else {
      // Si está cerrada, abrir inmediatamente y cerrar otras
      this.questions = this.questions.map(q => ({
        ...q,
        isOpen: q.id === id,
        isClosing: false
      }));
    }
  }
}
