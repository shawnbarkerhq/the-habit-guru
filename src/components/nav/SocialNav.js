import React from 'react';

const SocialNav = () => {
  const handles = [
    'facebook',
    'twitter',
    'instagram',
    'pinterest',
    'linked-in'
  ];
  return (
    <div className="row">
      <div className="card-action social">
        {handles.map(smlink => (
          <a
            href={`http://${smlink}.com/thehabitguru`}
            target="_blank"
            className="thg-blue"
            rel="noreferrer noopener"
          >
            <i className={`fab fa-${smlink} fa-2x`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialNav;
