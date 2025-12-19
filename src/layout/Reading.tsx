import sanitizeHtml from "sanitize-html";
import { useSensor } from "../hooks/sensorHooks";

export const Reading = ({ value }: { value: number }) => {
  const { name, unit_label } = useSensor();
  return (
    <div>
      <div>
        {name} - {value}
        <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(unit_label) }} />
      </div>
    </div>
  );
};
