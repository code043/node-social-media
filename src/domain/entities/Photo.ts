export default class Photo {
  constructor(
    readonly author: string,
    readonly title: string,
    readonly peso: string,
    readonly idade: string,
    readonly src?: string,
    readonly date?: string,
    readonly acessos?: string,
    readonly totalComments?: string,
    readonly id?: string
  ) {}
}
