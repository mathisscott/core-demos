import '@clr/core/button';
import '@clr/core/badge';
import '@clr/core/tag';
import '@clr/core/alert';
import '@clr/core/icon';
import { ClarityIcons, cloudScaleIcon, factoryIcon, networkSettingsIcon, nodeGroupIcon, nodeIcon, nodesIcon, plusIcon, refreshIcon, gridViewIcon, viewListIcon, wrenchIcon, twoWayArrowsIcon, checkIcon, warningStandardIcon, cogIcon } from '@clr/core/icon-shapes';

const clarityLogo = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><g fill="none" fill-rule="evenodd"><path fill="#179bd3" d="M24.702 4.583l11.278 6.679-.019 13.563-11.26 6.66-6.684-3.97 11.652-6.541v-5.898l-4.747-2.604-6.89-3.938"/><path fill="#F38B00" d="M11.331 4.583L.054 11.262l.018 13.563 11.26 6.66 6.685-3.97-10.663-6.541v-5.898l10.678-6.542"/><path fill="#00648f" d="M18.017 27.515L11.5 23.516l6.522-3.845 6.93 3.952"/><path fill="#98441E" d="M18.031 8.533l-6.504 3.985 6.517 3.884 6.862-3.94"/></g></svg>';

ClarityIcons.addIcons(['clarity-logo', clarityLogo], cloudScaleIcon, factoryIcon, networkSettingsIcon, nodeIcon, nodesIcon, nodeGroupIcon, plusIcon, wrenchIcon, gridViewIcon, viewListIcon, refreshIcon, twoWayArrowsIcon, checkIcon, warningStandardIcon, cogIcon);