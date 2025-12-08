import sanitizeHtml from "sanitize-html";
import { useSensor } from "../hooks/sensorHooks";

export const PrevReading = () => {
  const { name, unit_label } = useSensor();
  return (
    <div>
      <div>
        {name} -{" "}
        <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(unit_label) }} />
      </div>
    </div>
  );
};
