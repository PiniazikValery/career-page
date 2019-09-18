import React from 'react';
import Responsive from 'react-responsive';
import deviceSizes from './device_sizes';

export const Mobile = props => <Responsive {...props} maxWidth={deviceSizes.mobileMaxWidth} />;
export const Desktop = props => <Responsive {...props} minWidth={deviceSizes.desktopMinWidth} />;
