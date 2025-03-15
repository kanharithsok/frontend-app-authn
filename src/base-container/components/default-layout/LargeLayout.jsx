import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import logo from '../../../assets/logo.png';
import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="cover-left w-100 d-flex">
      <div className="col-md-12 bg-primary-400 vh-100 d-flex flex-column position-relative">
        <Hyperlink
          className="bg-yellow"
          destination={getConfig().MARKETING_SITE_BASE_URL}
          style={{ height: '40%' }}
        >
          <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={logo} />
        </Hyperlink>
        <div className="d-flex justify-content-start align-items-start" >
          <svg className="d-flex justify-content-end" width="10%">
            <g transform="skewX(180)">
              <rect x="90%" y="0" height="100%" width="10%" fill="green" />
            </g>
          </svg>
          <h1
            className={classNames(
              'display-1 text-white mw-xm',
              { 'ml-2': getConfig().SITE_NAME !== 'edX' },
            )}
          >
            {formatMessage(messages['start.learning'])}
            <div className="text-accent-a">
              {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LargeLayout;
