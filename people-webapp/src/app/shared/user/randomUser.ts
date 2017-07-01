/**
 * Created by steffen.koehler on 01.07.17.
 */

export class Randomuser {
  constructor(
    public userGender: string,
    public name: {
      first : string,
      last : string
    },
    public picture: {
      large: string,
      medium: string,
      thumbnail: string,
    },
    public location: {
      street: string,
      city: string,
      state: string,
      postcode: number
    },
    public email: string,
    public cell: string,
    public favorite: boolean

  ) {}
}
