-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 18, 2022 at 06:07 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laundry`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_transaksi`
--

CREATE TABLE `detail_transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_paket` int(11) NOT NULL,
  `qty` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detail_transaksi`
--

INSERT INTO `detail_transaksi` (`id_transaksi`, `id_paket`, `qty`, `createdAt`, `updatedAt`) VALUES
(7, 2, 1, '2022-01-08 11:57:44', '2022-01-08 11:57:44'),
(8, 2, 3, '2022-01-21 05:11:10', '2022-01-21 05:11:10'),
(20, 3, 2, '2022-01-25 00:13:05', '2022-01-25 00:13:05'),
(27, 2, 2, '2022-01-26 03:00:53', '2022-01-26 03:00:53'),
(36, 3, 2, '2022-01-26 12:42:36', '2022-01-26 12:42:36'),
(37, 3, 2, '2022-01-26 12:44:18', '2022-01-26 12:44:18'),
(40, 2, 2, '2022-01-31 02:30:47', '2022-01-31 02:30:47'),
(52, 2, 2, '2022-02-28 12:59:26', '2022-02-28 12:59:26'),
(53, 3, 2, '2022-02-28 13:26:16', '2022-02-28 13:26:16'),
(54, 2, 3, '2022-03-16 03:34:26', '2022-03-16 03:34:26');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id_member` int(11) NOT NULL,
  `nama_member` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `jenis_kelamin` varchar(255) DEFAULT NULL,
  `tlp` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id_member`, `nama_member`, `alamat`, `jenis_kelamin`, `tlp`, `createdAt`, `updatedAt`) VALUES
(2, 'Mark Lee', 'Canada', 'Laki-Laki', '0824918', '2021-12-25 03:02:50', '2022-03-09 13:58:37'),
(3, 'Jisung', 'Jeju', 'Laki-Laki', '01092749', '2021-12-26 21:05:54', '2022-01-11 10:29:11'),
(4, 'Na Jaemin', 'Seoul', 'Laki-Laki', '0102349', '2022-01-09 02:00:14', '2022-01-09 02:00:14'),
(5, 'Nana', 'Jakarta', 'Perempuan', '0823414', '2022-03-14 07:10:00', '2022-03-14 07:10:00');

-- --------------------------------------------------------

--
-- Table structure for table `paket`
--

CREATE TABLE `paket` (
  `id_paket` int(11) NOT NULL,
  `jenis_paket` varchar(255) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paket`
--

INSERT INTO `paket` (`id_paket`, `jenis_paket`, `harga`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'Sweater', 10000, 'image-1646920451507.jpeg', '2021-12-26 03:08:47', '2022-03-10 13:54:11'),
(3, 'Jeans', 7000, 'image-1646920397889.jpeg', '2022-01-08 23:45:16', '2022-03-10 13:53:37'),
(4, 'Selimut', 8000, 'image-1647076613614.jpeg', '2022-03-12 09:16:53', '2022-03-12 09:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20211022022121-create-member.js'),
('20211022022920-create-user.js'),
('20211022023017-create-paket.js'),
('20211022023339-create-transaksi.js'),
('20211022023455-create-detail-transaksi.js');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `id_member` int(11) NOT NULL,
  `tgl` datetime DEFAULT NULL,
  `batas_waktu` datetime DEFAULT NULL,
  `tgl_bayar` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `dibayar` int(11) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_transaksi`, `id_member`, `tgl`, `batas_waktu`, `tgl_bayar`, `status`, `dibayar`, `id_user`, `createdAt`, `updatedAt`) VALUES
(7, 2, '2021-12-27 00:00:00', '2021-12-30 00:00:00', '2022-01-21 00:00:00', 3, 1, 2, '2021-12-27 03:03:27', '2022-01-26 02:18:06'),
(8, 3, '2022-01-19 17:00:00', '2022-01-24 17:00:00', '2022-01-22 00:00:00', 4, 1, 2, '2022-01-21 03:49:44', '2022-01-22 14:33:45'),
(20, 4, '2022-01-24 17:00:00', '2022-01-27 17:00:00', '2022-01-26 00:00:00', 3, 1, 3, '2022-01-25 00:13:05', '2022-01-26 02:23:44'),
(27, 3, '2022-01-09 17:00:00', '2022-01-28 17:00:00', '2022-01-26 00:00:00', 4, 1, 3, '2022-01-26 03:00:53', '2022-01-26 03:04:53'),
(36, 4, '2020-01-24 17:00:00', '2020-01-27 17:00:00', '2022-01-26 00:00:00', 3, 1, 3, '2022-01-26 12:42:36', '2022-01-26 12:43:19'),
(37, 4, '2020-01-24 17:00:00', '2020-01-28 17:00:00', '2022-01-26 00:00:00', 3, 1, 3, '2022-01-26 12:44:18', '2022-01-26 12:44:53'),
(40, 4, '2022-01-30 17:00:00', '2022-02-01 17:00:00', '2022-01-31 00:00:00', 2, 1, 3, '2022-01-31 02:30:47', '2022-01-31 02:32:21'),
(52, 4, '2022-02-28 00:00:00', '2022-03-01 00:00:00', '2022-03-14 00:00:00', 1, 1, 4, '2022-02-28 12:59:26', '2022-03-14 04:06:25'),
(53, 2, '2022-02-28 00:00:00', '2022-03-02 00:00:00', '2022-02-28 00:00:00', 1, 0, 2, '2022-02-28 13:26:15', '2022-02-28 13:26:15'),
(54, 2, '2022-03-10 00:00:00', '2022-03-12 00:00:00', '2022-03-16 00:00:00', 2, 1, 4, '2022-03-16 03:34:26', '2022-03-16 03:34:43');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `nama_user`, `username`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'Xionjun', 'jun', '202cb962ac59075b964b07152d234b70', 'Admin', '2021-12-25 03:34:22', '2022-01-24 03:09:52'),
(3, 'Lee Jeno', 'jeno', '202cb962ac59075b964b07152d234b70', 'Kasir', '2022-01-09 01:49:24', '2022-01-09 01:50:54'),
(4, 'Chenle', 'chen', '202cb962ac59075b964b07152d234b70', 'Admin', '2022-01-26 12:48:00', '2022-01-26 12:48:00'),
(5, 'Renjun', 'renjun', '202cb962ac59075b964b07152d234b70', 'owner', '2022-03-12 02:11:29', '2022-03-12 02:11:29'),
(6, 'Amelia', 'amel', '202cb962ac59075b964b07152d234b70', 'Kasir', '2022-03-13 12:35:28', '2022-03-13 12:35:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_transaksi`
--
ALTER TABLE `detail_transaksi`
  ADD KEY `id_transaksi` (`id_transaksi`),
  ADD KEY `id_paket` (`id_paket`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id_member`);

--
-- Indexes for table `paket`
--
ALTER TABLE `paket`
  ADD PRIMARY KEY (`id_paket`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `id_member` (`id_member`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id_member` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `paket`
--
ALTER TABLE `paket`
  MODIFY `id_paket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_transaksi`
--
ALTER TABLE `detail_transaksi`
  ADD CONSTRAINT `detail_transaksi_ibfk_1` FOREIGN KEY (`id_transaksi`) REFERENCES `transaksi` (`id_transaksi`),
  ADD CONSTRAINT `detail_transaksi_ibfk_2` FOREIGN KEY (`id_paket`) REFERENCES `paket` (`id_paket`);

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_member`) REFERENCES `member` (`id_member`),
  ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
