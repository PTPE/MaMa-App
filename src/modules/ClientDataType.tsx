export type TimeType = {
  day: string;
  startHour: string;
  startMin: string;
  endHour: string;
  endMin: string;
};

export type DataType = {
  id: number;
  name: string;
  gender: string;
  address: string;
  service: string[];
  time: TimeType[];
};
