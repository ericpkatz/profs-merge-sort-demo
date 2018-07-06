const expect = require('chai').expect;
const mergeSort = require('../mergeSort');

describe('merge sort', ()=> {
  it('exists', ()=> {
    expect(mergeSort).to.be.ok;
  });
  it('sorts [2, 1]', ()=> {
    expect(mergeSort([2, 1])).to.eql([1, 2]);
  });
  it('sorts [3, 2, 1]', ()=> {
    expect(mergeSort([3, 2, 1])).to.eql([1, 2, 3]);
  });
});
