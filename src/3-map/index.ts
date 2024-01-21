class MyMap {
    private table: any[];
    private size: number;
    
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    set(key: any, value: any): void {
        const index = this.hash(key);

        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }

            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }

        this.size++;
    }

    get(key: any) {
        const target = this.hash(key);

        if (this.table[target]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return this.table[target][i][1];
                }
            }
        }

        return undefined;
    }

    delete(key: any): boolean {
        const index = this.hash(key);

        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }

            return false;
        } else {
            return false;
        }
    }

    clear(): void {
        this.table = new Array(127);
        this.size = 0;
    }

    private hash(key: any) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }
}

const myMap = new MyMap();
myMap.set("France", 111);
myMap.set("Spain", 150);
myMap.set("ǻ", 192);

console.log(myMap.get("France"));
console.log(myMap.get("Spain"));
console.log(myMap.get("ǻ"));