export const numberFormatter = (
  raw: number,
  locales = 'id-ID',
  opts?: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    ...opts,
  }).format(raw)
}
