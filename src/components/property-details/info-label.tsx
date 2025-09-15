import { ReactNode } from "react";

interface InfoLabelProps {
    label: string;
    value: string | number;
    icon?: ReactNode;
}

export const InfoLabel: React.FC<InfoLabelProps> = ({ label, value, icon }) => {
    return (
        <div className="text-center font-[Cinzel] uppercase flex flex-col items-center justify-center" style={{ width: '100%' }}>
            {icon && <span className="mb-1 text-muted-foreground ">{icon}</span>}
            <div className="text-lg text-muted-foreground" style={{ textAlign: 'center' }}>{value}</div>
            <div className="text-sm font-semibold text-muted-foreground" style={{ textAlign: 'center' }}>{label}</div>
        </div>
    );
};