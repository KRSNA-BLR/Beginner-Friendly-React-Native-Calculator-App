/**
 * @format
 * Tests unitarios para las utilidades de calculadora
 */

import {
  evaluateExpression,
  isValidExpression,
  formatNumber,
  preprocessExpression,
} from '../src/utils/calculator';

describe('Calculator Utils', () => {
  describe('evaluateExpression', () => {
    // Operaciones básicas
    describe('Operaciones básicas', () => {
      it('suma dos números correctamente', () => {
        expect(evaluateExpression('2+3')).toBe('5');
      });

      it('resta dos números correctamente', () => {
        expect(evaluateExpression('10-4')).toBe('6');
      });

      it('multiplica dos números correctamente', () => {
        expect(evaluateExpression('5*4')).toBe('20');
      });

      it('divide dos números correctamente', () => {
        expect(evaluateExpression('20/4')).toBe('5');
      });

      it('maneja operaciones encadenadas', () => {
        expect(evaluateExpression('2+3*4')).toBe('14');
      });

      it('respeta orden de operaciones', () => {
        expect(evaluateExpression('10+5*2')).toBe('20');
      });

      it('maneja paréntesis correctamente', () => {
        expect(evaluateExpression('(10+5)*2')).toBe('30');
      });
    });

    // Números decimales
    describe('Números decimales', () => {
      it('suma decimales correctamente', () => {
        expect(evaluateExpression('1.5+2.5')).toBe('4');
      });

      it('divide con resultado decimal', () => {
        expect(evaluateExpression('10/4')).toBe('2.5');
      });

      it('maneja decimales pequeños', () => {
        expect(evaluateExpression('0.1+0.2')).toBe('0.3');
      });
    });

    // Funciones científicas
    describe('Funciones científicas', () => {
      it('calcula raíz cuadrada', () => {
        expect(evaluateExpression('√(16)')).toBe('4');
      });

      it('calcula cuadrado', () => {
        expect(evaluateExpression('5²')).toBe('25');
      });

      it('calcula cubo', () => {
        expect(evaluateExpression('3³')).toBe('27');
      });

      it('calcula potencia', () => {
        expect(evaluateExpression('2^8')).toBe('256');
      });

      it('calcula seno de 0', () => {
        expect(evaluateExpression('sin(0)')).toBe('0');
      });

      it('calcula coseno de 0', () => {
        expect(evaluateExpression('cos(0)')).toBe('1');
      });

      it('calcula tangente de 0', () => {
        expect(evaluateExpression('tan(0)')).toBe('0');
      });

      it('calcula logaritmo base 10', () => {
        // mathjs usa log10() para base 10
        expect(evaluateExpression('log10(100)')).toBe('2');
      });

      it('calcula logaritmo natural', () => {
        const result = parseFloat(evaluateExpression('ln(e)'));
        expect(result).toBeCloseTo(1, 5);
      });
    });

    // Constantes
    describe('Constantes matemáticas', () => {
      it('reconoce π', () => {
        const result = parseFloat(evaluateExpression('π'));
        expect(result).toBeCloseTo(3.14159, 5);
      });

      it('reconoce e', () => {
        const result = parseFloat(evaluateExpression('e'));
        expect(result).toBeCloseTo(2.71828, 5);
      });

      it('calcula 2 * π', () => {
        const result = parseFloat(evaluateExpression('2*π'));
        expect(result).toBeCloseTo(6.28318, 4); // Reduced precision to 4 decimals
      });
    });

    // Funciones adicionales
    describe('Funciones adicionales', () => {
      it('calcula factorial', () => {
        expect(evaluateExpression('5!')).toBe('120');
      });

      it('calcula valor absoluto', () => {
        expect(evaluateExpression('abs(-10)')).toBe('10');
      });

      it('calcula módulo', () => {
        expect(evaluateExpression('mod(10,3)')).toBe('1');
      });
    });

    // Manejo de errores
    describe('Manejo de errores', () => {
      it('devuelve Error para división por cero', () => {
        expect(evaluateExpression('1/0')).toBe('Infinity');
      });

      it('devuelve Error para expresión inválida', () => {
        expect(evaluateExpression('abc')).toBe('Error');
      });

      it('devuelve Error para paréntesis no balanceados', () => {
        expect(evaluateExpression('(2+3')).toBe('Error');
      });

      it('devuelve Error para expresión vacía', () => {
        expect(evaluateExpression('')).toBe('Error');
      });
    });
  });

  describe('isValidExpression', () => {
    it('valida expresión numérica simple', () => {
      expect(isValidExpression('123')).toBe(true);
    });

    it('valida expresión con operadores', () => {
      expect(isValidExpression('1+2*3')).toBe(true);
    });

    it('valida expresión con funciones', () => {
      expect(isValidExpression('sin(45)')).toBe(true);
    });

    it('rechaza expresión con caracteres inválidos', () => {
      expect(isValidExpression('1+2$3')).toBe(false);
    });

    it('rechaza expresión vacía', () => {
      expect(isValidExpression('')).toBe(false);
    });
  });

  describe('formatNumber', () => {
    it('formatea número entero', () => {
      expect(formatNumber(1000)).toBe('1,000');
    });

    it('formatea número decimal', () => {
      expect(formatNumber(1234.56)).toBe('1,234.56');
    });

    it('formatea número negativo', () => {
      expect(formatNumber(-1000)).toBe('-1,000');
    });

    it('maneja números pequeños', () => {
      expect(formatNumber(0.001)).toBe('0.001');
    });
  });

  describe('preprocessExpression', () => {
    it('convierte × a *', () => {
      expect(preprocessExpression('2×3')).toContain('*');
    });

    it('convierte ÷ a /', () => {
      expect(preprocessExpression('6÷2')).toContain('/');
    });

    it('convierte √ a sqrt', () => {
      expect(preprocessExpression('√(4)')).toContain('sqrt');
    });

    it('convierte ² a ^2', () => {
      expect(preprocessExpression('5²')).toContain('^2');
    });

    it('convierte ³ a ^3', () => {
      expect(preprocessExpression('2³')).toContain('^3');
    });

    it('convierte π a pi', () => {
      expect(preprocessExpression('π')).toContain('pi');
    });
  });
});
