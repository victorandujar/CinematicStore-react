interface EndpointsApiStructure {
  movies: string;
  popular: string;
}

const endpointsApi: EndpointsApiStructure = {
  movies: "/movie",
  popular: "/popular",
};

export default endpointsApi;
