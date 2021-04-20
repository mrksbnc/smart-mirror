interface TrafficResponse {
  routes: Array<RouteModel>;
}

interface RouteModel {
  id: String;
  sections: Array<Section>;
}

interface Section {
  id: String;
  type: String;
  departure: {
    time: String;
    place: {
      type: String;
      location: { lat: Number; lng: Number };
      originalLocation: { lat: Number; lng: Number };
    };
  };
  arrival: {
    time: String;
    place: {
      type: String;
      location: { lat: Number; lng: Number };
      originalLocation: { lat: Number; lng: Number };
    };
  };
  transport: { mode: String };
}
