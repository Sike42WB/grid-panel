var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ecp, utils } from 'roku-test-automation';
import * as chai from 'chai';
const expect = chai.expect;
describe('Search', () => __awaiter(void 0, void 0, void 0, function* () {
    it('should be able to navigate the grid ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield utils.sleep(1500);
        yield ecp.sendKeyPress(ecp.Key.RIGHT);
        yield ecp.sendKeyPress(ecp.Key.DOWN);
        yield ecp.sendKeyPress(ecp.Key.DOWN);
    }));
}));
