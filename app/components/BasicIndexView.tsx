import { BasicLink } from "~/components/ui/link";

export interface BasicIndexViewProps {
  notFoundId?: string | null;
  subject: string;
}

export function BasicIndexView({ notFoundId, subject }: BasicIndexViewProps) {
  return (
    <div className={"text-center grid grid-cols-1 content-center"}>
      {!!notFoundId && (
        <p className={"font-bold text-red-700 dark:text-red-400"}>
          {subject} ID {notFoundId} not found.
        </p>
      )}
      <p>
        Select an {subject.toLocaleLowerCase()} on the left, or
        <br />
        <BasicLink to={"create"}>Create a new {subject.toLocaleLowerCase()}.</BasicLink>
      </p>
    </div>
  );
}
