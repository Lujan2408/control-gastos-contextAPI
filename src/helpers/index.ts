export const formatCurrency = (cantidad : number) => {
  return cantidad.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP'
  })
}