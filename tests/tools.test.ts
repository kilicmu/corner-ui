import { BatchTool } from "../src/tools/BatchTool"

test('test batch tools', () => {
    let testVal = 0;
    const objWithFnA = {
        add: (n: number) => {
            testVal += n ;
        }
    }
    const objWithFnB = {
        add: (n: number) => {
            testVal += n;
        }
    }
    const batcher = new BatchTool<typeof objWithFnB>();
    batcher.sign(objWithFnA)
    batcher.sign(objWithFnB)

    const trigger = batcher.getTrigger()
    trigger && trigger.add(2);

    expect(testVal).toEqual(4)
}) 