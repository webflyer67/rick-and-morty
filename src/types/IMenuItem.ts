/** Данные для формирования меню */
export interface IMenuItem {
  /** id пункта меню  */
  id: string
  /** Ссылка для роутера  */
  to: {
    path: string
  }
}
