import { Box, Typography } from "@mui/material";

function maskBank(bank) {
  if (!bank) return "";
  if (bank.length <= 4) {
    return bank; // không che nếu số ngắn
  }
  const last4 = bank.slice(-4);
  const masked = "*".repeat(bank.length - 4) + last4;
  return masked;
}

const Item = ({ item }) => {
  return (
    <>
      <Box
        sx={{
          background: "url(/assets/images/background_bank.png) no-repeat 50%",
          backgroundSize: "100% 100%",
          padding: "1rem",
          minHeight: "20rem",
          alignItems: "center",
          gap: "1rem",
          color: (theme) => theme.palette.text.primary,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "2rem",
          }}
          className="bank-item-text"
        >
          <Typography
            sx={{
              fontSize: "1.8rem",
            }}
          >
            {item.tenChuTaiKhoan}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
            }}
          >
            {maskBank(item.soTaiKhoan)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            margin: "2rem",
            alignItems: "center",
          }}
          className="bank-item-text"
        >
          <img src="/assets/images/credit_card.png" />
          <Typography
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "2.5rem",
            }}
          >
            {item.tenNganHang}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Item;