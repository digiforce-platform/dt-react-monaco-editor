import { ParserPython2, ParserPython3 } from 'dt-python-parser';

const ctx: Worker = self as any;

console.log('*****dtsql-worker初始化*****')

ctx.onmessage = (e: any) => {
    const message = e.data;
    const { eventId, data = [], language } = message;
    let parserMethod = ParserPython2
    const newData = data.map(item => {
        return item[item?.length - 1] !== '\n' ? item + '\n' : item
    })
    if (language === 'dtPython3') parserMethod = ParserPython3
    ctx.postMessage({
        eventId: eventId,
        result: parserMethod(...newData)
    })
}

console.log('*****dtsql-worker初始化完成*****')
// Trickery to fix TypeScript since this will be done by "worker-loader"
// eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
export default {} as typeof Worker & (new () => Worker);
