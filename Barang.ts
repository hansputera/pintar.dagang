import { FullGet, prizes } from "./typings";

export default class Barang {
    constructor(readonly nama: string, readonly amount: number, readonly prize: number) {
        if (!Object.keys(prizes).includes(this.nama.toLowerCase())) {
            throw Error('Gada');
        }
    }

    getPrize(): number {
        const prizes = Math.floor(this.prize) * this.amount;
        return prizes;
    }

    getFull(): FullGet {
        return {
         prize: this.getPrize(),
         amount: this.amount,
         name: this.nama
        };
    }
}