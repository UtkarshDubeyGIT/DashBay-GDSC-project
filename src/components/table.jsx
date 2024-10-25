import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  
  return (
    <TableContainer component={Paper} className="shadow-md rounded-lg overflow-hidden">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="font-semibold text-gray-600">Tracking ID</TableCell>
            <TableCell className="font-semibold text-gray-600">Product</TableCell>
            <TableCell className="font-semibold text-gray-600">Customer</TableCell>
            <TableCell className="font-semibold text-gray-600">Date</TableCell>
            <TableCell className="font-semibold text-gray-600">Amount</TableCell>
            <TableCell className="font-semibold text-gray-600">Payment Method</TableCell>
            <TableCell className="font-semibold text-gray-600">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="py-4">{row.id}</TableCell>
              <TableCell className="py-4">
                <div className="flex items-center">
                  <img src={row.img} alt="" className="w-8 h-8 rounded-full mr-3 object-cover" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="py-4">{row.customer}</TableCell>
              <TableCell className="py-4">{row.date}</TableCell>
              <TableCell className="py-4">${row.amount}</TableCell>
              <TableCell className="py-4">{row.method}</TableCell>
              <TableCell className="py-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    row.status === "Approved"
                      ? "text-green-700 bg-green-100"
                      : "text-yellow-700 bg-yellow-100"
                  }`}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
