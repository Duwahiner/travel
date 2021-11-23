const schema = {
  values: {
    fullName: '',
    email: '',
    phone: '',
    rangeAge: ''
  },

  valideError: {
    fullName: { message: '' },
    email: { message: '' },
    phone: { message: '' },
    rangeAge: { message: '' }
  },

  isValide: false,
}

const configReg = {
  reg: {
    fullName: new RegExp('^[a-zA-Z ]{4,50}$'),
    email: new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$'),
    phone: new RegExp('^([0-9]){10}$'),
    rangeAge: new RegExp('^(1[8-9]|[2-9][0-9]|1[0]{2})$')
  },

  message: {
    fullName: 'El nombre sólo debe contener letras y no debe ser menor a 4 o mayor 50 caracteres',
    email: 'El correo no es valido, ejemplo: andres@gmail.com',
    phone: 'El número celular no es valido',
    rangeAge: 'Rango de edad no valido, rango permitido desde los 18 hasta los 100 años'
  }
}

export {
  schema,
  configReg,
}