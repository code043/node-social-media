export default class Post {
  constructor(
    readonly author: string,
    readonly title: string,
    readonly peso: number,
    readonly idade: number,
    readonly src?: string,
    readonly date?: number,
    readonly acessos?: string,
    readonly totalComments?: string,
    readonly id?: string
  ) {}
}
