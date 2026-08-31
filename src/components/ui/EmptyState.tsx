import type { ReactNode } from "react";

export default function EmptyState({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return <section className="empty-state"><h3>{title}</h3><p>{children}</p>{action && <div>{action}</div>}</section>;
}
