interface InfoLabelProps {
    label: string;
    value: string | number;
}

export const InfoLabel: React.FC<InfoLabelProps> = ({ label, value }) => {
    return (
    <div className="text-center flex-grow min-w-50">
        <div className="text-xl font-semibold">{value}</div>
        <div className="text-md text-muted-foreground">{label}</div>
    </div>
    );
};