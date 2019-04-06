import React from 'react';
import fetchMock from 'fetch-mock';
import Details from '../details';
import { render } from '../../renderTools';

const ENTERPRISE_PARAMS: string = 'Crème de la crème';
const INVALID_ENTERPRISE_PARAMS: string = 'Lait caillé';
const AN_ENTERPRISE = {
  name: 'Crème de la crème',
  description:
    'ubdcdjkc hdmoihcmds cnds kjcnsdjkchds mcbdjkcn dskjcn mdjksckdsjncsdkj : csmdicj djchdjc djncd cdnckjdnck dsùcmcs:jcnds ncd cdnc djnd cd jn j ddj dfhzmco qizekjnc janc m  nvj nvmar ',
  organisation:
    'opjcnd ,cd c,dùkc, dùcm,dù lkv,fo vn ,dv klfù,v fkjvei zvdfk,v fdl,vdfùsvds',
  practices: ['react', 'node', 'go', 'angular', 'mob progamming'],
  localisation: 'Paris 18eme',
  teamGeneral: [{ name: 'Paul Doe', role: 'CTO' }],
  teamInvolved: [
    {
      name: 'Jack Dupond',
      role: 'Developeur fullStack',
    },
    {
      name: 'Jack Dupond',
      role: 'Developeur fullStack',
    },
    {
      name: 'Jack Dupond',
      role: 'Developeur fullStack',
    },
  ],
};

describe('Experience list page', () => {
  beforeEach(() => {
    fetchMock.restore();
    fetchMock.mock(
      `http://localhost:3001/experience/${encodeURIComponent(
        ENTERPRISE_PARAMS,
      )}`,
      {
        status: 200,
        body: JSON.stringify({
          response: AN_ENTERPRISE,
        }),
      },
    );
  });
  it('display the name', done => {
    const { getByText } = render(
      <Details enterpriseParams={ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(getByText('Crème de la crème')).toBeDefined();
      done();
    });
  });
  it('display the description', done => {
    const { getByText } = render(
      <Details enterpriseParams={ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(getByText(/^ubdcdjkc hdmoihcmds/)).toBeDefined();
      done();
    });
  });
  it('display the organisation', done => {
    const { getByText } = render(
      <Details enterpriseParams={ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(getByText(/^opjcnd ,cd c,dùkc,/)).toBeDefined();
      done();
    });
  });
  it('display the people of the main team', done => {
    const { getByTestId } = render(
      <Details enterpriseParams={ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(getByTestId('general-team-container').children).toHaveLength(
        AN_ENTERPRISE.teamGeneral.length,
      );
      done();
    });
  });
  it('display the people of the involved team', done => {
    const { getByTestId } = render(
      <Details enterpriseParams={ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(getByTestId('involved-team-container').children).toHaveLength(
        AN_ENTERPRISE.teamInvolved.length,
      );
      done();
    });
  });
  it('display the practices of the experience', done => {
    const { getByTestId } = render(
      <Details enterpriseParams={ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(getByTestId('practices-container').children).toHaveLength(
        AN_ENTERPRISE.practices.length,
      );
      done();
    });
  });

  it('display an error message when experience is undefined', done => {
    fetchMock.mock(
      `http://localhost:3001/experience/${encodeURIComponent(
        INVALID_ENTERPRISE_PARAMS,
      )}`,
      {
        status: 200,
        body: JSON.stringify({
          response: undefined,
        }),
      },
    );
    const { queryByText } = render(
      <Details enterpriseParams={INVALID_ENTERPRISE_PARAMS} />,
    );
    setImmediate(() => {
      expect(queryByText(/List/)).toBeDefined();
      done();
    });
  });
});
