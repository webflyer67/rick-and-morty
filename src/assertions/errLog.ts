/**
 * Обетка над логгером
 * @param msg Сообщение
 * @param obj Данные
 */
function errLog(msg: string, obj: any): void {
  console.error(msg, obj)
}

export { errLog }
