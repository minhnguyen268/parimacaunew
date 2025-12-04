import { convertJSXMoney } from "@/utils/convertMoney";
import { convertDateTime } from "@/utils/convertTime";
import { convertJSXTinhTrangWithdrawHistory } from "@/utils/convertTinhTrang";
import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

function maskBank(bank) {
  if (!bank) return "";
  if (bank.length <= 4) {
    return bank; // không che nếu số ngắn
  }
  const last4 = bank.slice(-4);
  const masked = "*".repeat(bank.length - 4) + last4;
  return masked;
}


const ItemLichSu = ({ item }) => {
  const { t } = useTranslation('common');

  const convertThongTinNganHang =
    `${item?.nganHang?.tenNganHang} - ${item?.nganHang?.tenChuTaiKhoan} - ${maskBank(item?.nganHang?.soTaiKhoan)}` ?? "";
  return (
    <>
      <Box
        sx={{
          padding: "10px",
          borderBottom: "1px solid #e5e5e5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          color: "text.primary",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {t("Withdrawal")}
            </Typography>
            {convertJSXTinhTrangWithdrawHistory(item.tinhTrang)}
          </Box>

          <Typography
            sx={{
              color: "#b7b7b7",
              fontSize: "1.3rem",
            }}
          >
            {t('Bank number')}: {convertThongTinNganHang}
          </Typography>
          {item.noiDung && (
            <Typography
              sx={{
                color: "#b7b7b7",
                fontSize: "1.3rem",
              }}
            >
              {t('Detail')}: {item.noiDung}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-end",
          }}
        >
          <Typography>-{convertJSXMoney(item.soTien)}</Typography>

          <Typography
            sx={{
              color: "#b7b7b7",
              fontSize: "1.3rem",
            }}
          >
            {convertDateTime(item.createdAt)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ItemLichSu;
