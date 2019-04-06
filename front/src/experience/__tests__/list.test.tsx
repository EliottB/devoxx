import React from 'react';
import List from '../list';
import fetchMock from 'fetch-mock';
import { render } from '../../renderTools';

const AN_ENTERPRISE = {
  name: 'Crème de la crème',
  description:
    'ubdcdjkc hdmoihcmds cnds kjcnsdjkchds mcbdjkcn dskjcn mdjksckdsjncsdkj : csmdicj djchdjc djncd cdnckjdnck dsùcmcs:jcnds ncd cdnc djnd cd jn j ddj dfhzmco qizekjnc janc m  nvj nvmar ',
  organisation:
    'opjcnd ,cd c,dùkc, dùcm,dù lkv,fo vn ,dv klfù,v fkjvei zvdfk,v fdl,vdfùsvds',
  practices: [
    'react',
    'node',
    'go',
    'angular',
    'mob progamming',
    'pear programming',
  ],
  localisation: 'Paris 18eme',
  teamGeneral: [{ name: 'Paul Doe', role: 'CTO' }],
  teamInvolved: [
    {
      name: 'Jack Dupond',
      role: 'Developeur fullStack',
    },
  ],
};

const A_LIST = [AN_ENTERPRISE, AN_ENTERPRISE];

describe('Experience list page', () => {
  beforeEach(() => {
    fetchMock.restore();
    jest.useFakeTimers();
  });
  it('display all enterprises', done => {
    fetchMock.mock('http://localhost:3001/list/experience', {
      status: 200,
      body: JSON.stringify({
        response: A_LIST,
      }),
    });
    const { getByTestId } = render(<List />);
    setImmediate(() => {
      expect(getByTestId('entreprise-list').children).toHaveLength(
        A_LIST.length,
      );
      done();
    });
  });
});
