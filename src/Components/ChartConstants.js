import React from "react";

export const markerSettings = {
    visible: true,
    height: 0, width: 0,
    shape: 'Pentagon',
    dataLabel: { visible: true, position: 'Middle', name: 'title' }
};

export const zoomsettings = {
    enableMouseWheelZooming: true, enablePinchZooming: true,
    enableSelectionZooming: true, enableScrollbar: true
};

export const primaryxAxis = { crossesAt: 0, crossesInAxis: 0 ,minimum: -1, maximum: 1};
export const primaryyAxis = { crossesAt: 0, crossesInAxis: 0 ,minimum: -1, maximum: 1};

let template =  function toolTipTemplate(args) {
    const items = args.tooltip.map(function(item){
        return <div className={"toolTipItem"}> {item} </div>;
    });
    return (
        <span className={"customToolTip"}>
            {items}
        </span>
    );
};
export const tooltipSettings = {
    enable: true, header: '${series.name}',
    format: '${point.tooltip}',
};

export function tooltipRender(args){
    args.headerText = args.point.text;
};