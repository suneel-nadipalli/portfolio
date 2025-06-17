
interface UMDCardProps {
  title: string;
  tags?: string[];
}

export default function UMDCard({ title, tags = [] }: UMDCardProps) {
  return (
    <div className="umd-wrapper">
      <div className="umd-disc-shell">
        <div className="umd-disc">
          <div className="umd-disc-ring" />
          <div className="umd-disc-center">{title}</div>
        </div>
      </div>
      <div className="umd-tagbar">
        {tags.map((tag, idx) => (
          <span key={idx} className="umd-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
