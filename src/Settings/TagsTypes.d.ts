import { FunctionComponent, SVGProps } from 'react';

export interface TagSettings {
    tag: string,
    device: string,
    minValue: number,
    maxValue: number,
    description:string
    unit: string,
    title: string,
    Icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
}