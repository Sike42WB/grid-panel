import { ecp, odc, utils } from 'roku-test-automation';
import * as chai from 'chai';
const expect = chai.expect;

describe('Search', async () => {
    it('should be able to navigate the grid ', async () => {
        await utils.sleep(1500);
        await ecp.sendKeyPress(ecp.Key.RIGHT);
        await ecp.sendKeyPress(ecp.Key.DOWN);
        await ecp.sendKeyPress(ecp.Key.DOWN);
    });

});
