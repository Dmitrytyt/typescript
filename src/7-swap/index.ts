const obj: Record<string, number> = {
    a: 1,
    b: 2
}

function swapKeysAndValues(obj: Record<number, string>): Record<string, number>;
function swapKeysAndValues(obj: Record<string, number>): Record<number, string>;
function swapKeysAndValues(obj: Record<string | number, number | string>): Record<string | number, number | string> {
    if (typeof Object.keys(obj)[0] === 'string') {
        const result: Record<number, string> = {};

        Object.keys(obj).forEach(key => {
            result[obj[key]] = key;
        });

        return result;
    } else if (typeof Object.keys(obj)[0] === 'number') {
        let result: Record<string, number> = {};

        Object.keys(obj).forEach(key => {
            result[obj[key]] = key;
        });

        return result;
    }

    return {};
}

const res = swapKeysAndValues(obj);
