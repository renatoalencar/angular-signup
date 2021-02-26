import { TestBed } from '@angular/core/testing';

import Cpf from './cpf';

describe('CpfService', () => {
  it('should validate a common cpf', () => {
    expect(Cpf.validate('34737453080')).toBeTrue();
  });

  it('should validate a invalid cpf', () => {
    expect(Cpf.validate('34737543080')).toBeFalse();
  });

  it('should validate cpf with dots', () => {
    expect(Cpf.validate('847.531.510-00')).toBeTrue();
  })

  it('should validate cpf with only dash', () => {
    expect(Cpf.validate('847531510-00')).toBeTrue();
  })

  it('should valida invalid all equal cpfs', () => {
    expect(Cpf.validate('111.111.111-11')).toBeFalse();
    expect(Cpf.validate('222.222.222-22')).toBeFalse();
    expect(Cpf.validate('333.333.333-33')).toBeFalse();
    expect(Cpf.validate('444.444.444-44')).toBeFalse();
    expect(Cpf.validate('555.555.555-55')).toBeFalse();
  })
});
