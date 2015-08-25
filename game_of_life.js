var BOARD_SIZE = 1444;
var BOARD_WIDTH = Math.sqrt(BOARD_SIZE);
var CELL_WIDTH = 400 / BOARD_WIDTH;

var intervalID = 1;
var isRunning = false;

var INTERVAL_SPEED = 200

// this initiated the board
var board = [];

// Cell object which contains the id, number of neighbors, and whether a cell is alive
var Cell = function(id, neighbors, isAlive){
	return {
		id: id,
		neighbors: neighbors,
		isAlive: isAlive,
	};
};

//38 x 38 or 1444
//returns the glider object
var getGlider = function(){
	return [Cell(0,0,false), Cell(1,0,false), Cell(2,0,false), Cell(3,0,false), Cell(4,0,false), Cell(5,0,false), Cell(6,0,false), Cell(7,0,false), Cell(8,0,false), Cell(9,0,false), Cell(10,0,false), Cell(11,0,false), Cell(12,0,false), Cell(13,0,false), Cell(14,0,false), Cell(15,0,false), Cell(16,0,false), Cell(17,0,false), Cell(18,0,false), Cell(19,0,false), Cell(20,0,false), Cell(21,0,false), Cell(22,0,false), Cell(23,0,false), Cell(24,1,false), Cell(25,1,false), Cell(26,1,false), Cell(27,0,false), Cell(28,0,false), Cell(29,0,false), Cell(30,0,false), Cell(31,0,false), Cell(32,0,false), Cell(33,0,false), Cell(34,0,false), Cell(35,0,false), Cell(36,0,false), Cell(37,0,false), Cell(38,0,false), Cell(39,0,false), Cell(40,0,false), Cell(41,0,false), Cell(42,0,false), Cell(43,0,false), Cell(44,0,false), Cell(45,0,false), Cell(46,0,false), Cell(47,0,false), Cell(48,0,false), Cell(49,0,false), Cell(50,0,false), Cell(51,0,false), Cell(52,0,false), Cell(53,0,false), Cell(54,0,false), Cell(55,0,false), Cell(56,0,false), Cell(57,0,false), Cell(58,0,false), Cell(59,0,false), Cell(60,1,false), Cell(61,1,false), Cell(62,3,false), Cell(63,1,true), Cell(64,2,false), Cell(65,0,false), Cell(66,0,false), Cell(67,0,false), Cell(68,0,false), Cell(69,0,false), Cell(70,0,false), Cell(71,0,false), Cell(72,0,false), Cell(73,0,false), Cell(74,0,false), Cell(75,0,false), Cell(76,0,false), Cell(77,0,false), Cell(78,0,false), Cell(79,0,false), Cell(80,0,false), Cell(81,0,false), Cell(82,0,false), Cell(83,0,false), Cell(84,0,false), Cell(85,0,false), Cell(86,0,false), Cell(87,0,false), Cell(88,1,false), Cell(89,2,false), Cell(90,2,false), Cell(91,1,false), Cell(92,0,false), Cell(93,0,false), Cell(94,0,false), Cell(95,0,false), Cell(96,1,false), Cell(97,2,false), Cell(98,3,false), Cell(99,1,true), Cell(100,3,false), Cell(101,1,true), Cell(102,2,false), Cell(103,0,false), Cell(104,0,false), Cell(105,0,false), Cell(106,0,false), Cell(107,0,false), Cell(108,0,false), Cell(109,0,false), Cell(110,1,false), Cell(111,2,false), Cell(112,2,false), Cell(113,1,false), Cell(114,0,false), Cell(115,0,false), Cell(116,0,false), Cell(117,0,false), Cell(118,0,false), Cell(119,0,false), Cell(120,0,false), Cell(121,0,false), Cell(122,0,false), Cell(123,0,false), Cell(124,0,false), Cell(125,1,false), Cell(126,2,false), Cell(127,2,true), Cell(128,1,true), Cell(129,2,false), Cell(130,1,false), Cell(131,1,false), Cell(132,0,false), Cell(133,0,false), Cell(134,2,false), Cell(135,3,true), Cell(136,4,true), Cell(137,3,false), Cell(138,2,false), Cell(139,1,false), Cell(140,1,false), Cell(141,0,false), Cell(142,0,false), Cell(143,0,false), Cell(144,0,false), Cell(145,0,false), Cell(146,0,false), Cell(147,0,false), Cell(148,2,false), Cell(149,3,true), Cell(150,3,true), Cell(151,2,false), Cell(152,1,false), Cell(153,2,false), Cell(154,2,false), Cell(155,1,false), Cell(156,0,false), Cell(157,0,false), Cell(158,0,false), Cell(159,0,false), Cell(160,0,false), Cell(161,0,false), Cell(162,1,false), Cell(163,2,false), Cell(164,2,true), Cell(165,3,false), Cell(166,2,false), Cell(167,2,false), Cell(168,1,true), Cell(169,2,false), Cell(170,1,false), Cell(171,0,false), Cell(172,3,false), Cell(173,5,true), Cell(174,5,true), Cell(175,3,false), Cell(176,0,false), Cell(177,0,false), Cell(178,0,false), Cell(179,0,false), Cell(180,0,false), Cell(181,0,false), Cell(182,0,false), Cell(183,0,false), Cell(184,0,false), Cell(185,0,false), Cell(186,2,false), Cell(187,3,true), Cell(188,3,true), Cell(189,2,false), Cell(190,2,false), Cell(191,3,true), Cell(192,3,true), Cell(193,2,false), Cell(194,0,false), Cell(195,0,false), Cell(196,0,false), Cell(197,0,false), Cell(198,0,false), Cell(199,0,false), Cell(200,2,false), Cell(201,2,true), Cell(202,3,false), Cell(203,1,false), Cell(204,1,false), Cell(205,2,false), Cell(206,4,false), Cell(207,3,true), Cell(208,3,false), Cell(209,1,false), Cell(210,2,false), Cell(211,3,true), Cell(212,4,true), Cell(213,3,false), Cell(214,2,false), Cell(215,1,false), Cell(216,1,false), Cell(217,0,false), Cell(218,0,false), Cell(219,0,false), Cell(220,0,false), Cell(221,0,false), Cell(222,0,false), Cell(223,0,false), Cell(224,1,false), Cell(225,2,false), Cell(226,2,false), Cell(227,1,false), Cell(228,2,false), Cell(229,3,true), Cell(230,3,true), Cell(231,2,false), Cell(232,0,false), Cell(233,0,false), Cell(234,0,false), Cell(235,0,false), Cell(236,0,false), Cell(237,0,false), Cell(238,3,false), Cell(239,2,true), Cell(240,3,false), Cell(241,0,false), Cell(242,1,false), Cell(243,0,true), Cell(244,4,false), Cell(245,3,true), Cell(246,3,true), Cell(247,1,false), Cell(248,1,false), Cell(249,2,false), Cell(250,3,false), Cell(251,1,true), Cell(252,3,false), Cell(253,1,true), Cell(254,2,false), Cell(255,0,false), Cell(256,0,false), Cell(257,0,false), Cell(258,0,false), Cell(259,0,false), Cell(260,0,false), Cell(261,0,false), Cell(262,0,false), Cell(263,0,false), Cell(264,0,false), Cell(265,0,false), Cell(266,1,false), Cell(267,2,false), Cell(268,2,false), Cell(269,1,false), Cell(270,0,false), Cell(271,0,false), Cell(272,0,false), Cell(273,0,false), Cell(274,0,false), Cell(275,0,false), Cell(276,2,false), Cell(277,2,true), Cell(278,3,false), Cell(279,1,false), Cell(280,1,false), Cell(281,2,false), Cell(282,4,false), Cell(283,3,true), Cell(284,3,false), Cell(285,1,false), Cell(286,0,false), Cell(287,0,false), Cell(288,1,false), Cell(289,1,false), Cell(290,3,false), Cell(291,1,true), Cell(292,2,false), Cell(293,0,false), Cell(294,0,false), Cell(295,0,false), Cell(296,0,false), Cell(297,0,false), Cell(298,0,false), Cell(299,0,false), Cell(300,0,false), Cell(301,0,false), Cell(302,0,false), Cell(303,0,false), Cell(304,0,false), Cell(305,0,false), Cell(306,0,false), Cell(307,0,false), Cell(308,0,false), Cell(309,0,false), Cell(310,0,false), Cell(311,0,false), Cell(312,0,false), Cell(313,0,false), Cell(314,1,false), Cell(315,2,false), Cell(316,2,true), Cell(317,3,false), Cell(318,2,false), Cell(319,2,false), Cell(320,1,true), Cell(321,2,false), Cell(322,1,false), Cell(323,0,false), Cell(324,0,false), Cell(325,0,false), Cell(326,0,false), Cell(327,0,false), Cell(328,1,false), Cell(329,1,false), Cell(330,1,false), Cell(331,0,false), Cell(332,0,false), Cell(333,0,false), Cell(334,0,false), Cell(335,0,false), Cell(336,0,false), Cell(337,0,false), Cell(338,0,false), Cell(339,0,false), Cell(340,0,false), Cell(341,0,false), Cell(342,0,false), Cell(343,0,false), Cell(344,0,false), Cell(345,0,false), Cell(346,0,false), Cell(347,0,false), Cell(348,0,false), Cell(349,0,false), Cell(350,0,false), Cell(351,0,false), Cell(352,0,false), Cell(353,1,false), Cell(354,2,false), Cell(355,2,true), Cell(356,1,true), Cell(357,2,false), Cell(358,1,false), Cell(359,1,false), Cell(360,0,false), Cell(361,0,false), Cell(362,0,false), Cell(363,0,false), Cell(364,0,false), Cell(365,0,false), Cell(366,0,false), Cell(367,0,false), Cell(368,0,false), Cell(369,0,false), Cell(370,0,false), Cell(371,0,false), Cell(372,0,false), Cell(373,0,false), Cell(374,0,false), Cell(375,0,false), Cell(376,0,false), Cell(377,0,false), Cell(378,0,false), Cell(379,0,false), Cell(380,0,false), Cell(381,0,false), Cell(382,0,false), Cell(383,0,false), Cell(384,0,false), Cell(385,0,false), Cell(386,0,false), Cell(387,0,false), Cell(388,0,false), Cell(389,0,false), Cell(390,0,false), Cell(391,0,false), Cell(392,1,false), Cell(393,2,false), Cell(394,2,false), Cell(395,1,false), Cell(396,0,false), Cell(397,0,false), Cell(398,0,false), Cell(399,0,false), Cell(400,0,false), Cell(401,0,false), Cell(402,0,false), Cell(403,0,false), Cell(404,0,false), Cell(405,0,false), Cell(406,0,false), Cell(407,0,false), Cell(408,0,false), Cell(409,0,false), Cell(410,0,false), Cell(411,0,false), Cell(412,0,false), Cell(413,0,false), Cell(414,0,false), Cell(415,0,false), Cell(416,0,false), Cell(417,0,false), Cell(418,0,false), Cell(419,0,false), Cell(420,0,false), Cell(421,0,false), Cell(422,0,false), Cell(423,0,false), Cell(424,0,false), Cell(425,0,false), Cell(426,0,false), Cell(427,0,false), Cell(428,0,false), Cell(429,0,false), Cell(430,0,false), Cell(431,0,false), Cell(432,0,false), Cell(433,0,false), Cell(434,0,false), Cell(435,0,false), Cell(436,0,false), Cell(437,0,false), Cell(438,0,false), Cell(439,0,false), Cell(440,0,false), Cell(441,0,false), Cell(442,0,false), Cell(443,0,false), Cell(444,0,false), Cell(445,0,false), Cell(446,0,false), Cell(447,0,false), Cell(448,0,false), Cell(449,0,false), Cell(450,0,false), Cell(451,0,false), Cell(452,0,false), Cell(453,0,false), Cell(454,0,false), Cell(455,0,false), Cell(456,0,false), Cell(457,0,false), Cell(458,0,false), Cell(459,0,false), Cell(460,0,false), Cell(461,0,false), Cell(462,0,false), Cell(463,0,false), Cell(464,0,false), Cell(465,0,false), Cell(466,0,false), Cell(467,0,false), Cell(468,0,false), Cell(469,0,false), Cell(470,0,false), Cell(471,0,false), Cell(472,0,false), Cell(473,0,false), Cell(474,0,false), Cell(475,0,false), Cell(476,0,false), Cell(477,0,false), Cell(478,0,false), Cell(479,0,false), Cell(480,0,false), Cell(481,0,false), Cell(482,0,false), Cell(483,0,false), Cell(484,0,false), Cell(485,0,false), Cell(486,0,false), Cell(487,0,false), Cell(488,0,false), Cell(489,0,false), Cell(490,0,false), Cell(491,0,false), Cell(492,0,false), Cell(493,0,false), Cell(494,0,false), Cell(495,0,false), Cell(496,0,false), Cell(497,0,false), Cell(498,0,false), Cell(499,0,false), Cell(500,0,false), Cell(501,0,false), Cell(502,0,false), Cell(503,0,false), Cell(504,0,false), Cell(505,0,false), Cell(506,0,false), Cell(507,0,false), Cell(508,0,false), Cell(509,0,false), Cell(510,0,false), Cell(511,0,false), Cell(512,0,false), Cell(513,0,false), Cell(514,0,false), Cell(515,0,false), Cell(516,0,false), Cell(517,0,false), Cell(518,0,false), Cell(519,0,false), Cell(520,0,false), Cell(521,0,false), Cell(522,0,false), Cell(523,0,false), Cell(524,0,false), Cell(525,0,false), Cell(526,0,false), Cell(527,0,false), Cell(528,0,false), Cell(529,0,false), Cell(530,0,false), Cell(531,0,false), Cell(532,0,false), Cell(533,0,false), Cell(534,0,false), Cell(535,0,false), Cell(536,0,false), Cell(537,0,false), Cell(538,0,false), Cell(539,0,false), Cell(540,0,false), Cell(541,0,false), Cell(542,0,false), Cell(543,0,false), Cell(544,0,false), Cell(545,0,false), Cell(546,0,false), Cell(547,0,false), Cell(548,0,false), Cell(549,0,false), Cell(550,0,false), Cell(551,0,false), Cell(552,0,false), Cell(553,0,false), Cell(554,0,false), Cell(555,0,false), Cell(556,0,false), Cell(557,0,false), Cell(558,0,false), Cell(559,0,false), Cell(560,0,false), Cell(561,0,false), Cell(562,0,false), Cell(563,0,false), Cell(564,0,false), Cell(565,0,false), Cell(566,0,false), Cell(567,0,false), Cell(568,0,false), Cell(569,0,false), Cell(570,0,false), Cell(571,0,false), Cell(572,0,false), Cell(573,0,false), Cell(574,0,false), Cell(575,0,false), Cell(576,0,false), Cell(577,0,false), Cell(578,0,false), Cell(579,0,false), Cell(580,0,false), Cell(581,0,false), Cell(582,0,false), Cell(583,0,false), Cell(584,0,false), Cell(585,0,false), Cell(586,0,false), Cell(587,0,false), Cell(588,0,false), Cell(589,0,false), Cell(590,0,false), Cell(591,0,false), Cell(592,0,false), Cell(593,0,false), Cell(594,0,false), Cell(595,0,false), Cell(596,0,false), Cell(597,0,false), Cell(598,0,false), Cell(599,0,false), Cell(600,0,false), Cell(601,0,false), Cell(602,0,false), Cell(603,0,false), Cell(604,0,false), Cell(605,0,false), Cell(606,0,false), Cell(607,0,false), Cell(608,0,false), Cell(609,0,false), Cell(610,0,false), Cell(611,0,false), Cell(612,0,false), Cell(613,0,false), Cell(614,0,false), Cell(615,0,false), Cell(616,0,false), Cell(617,0,false), Cell(618,0,false), Cell(619,0,false), Cell(620,0,false), Cell(621,0,false), Cell(622,0,false), Cell(623,0,false), Cell(624,0,false), Cell(625,0,false), Cell(626,0,false), Cell(627,0,false), Cell(628,0,false), Cell(629,0,false), Cell(630,0,false), Cell(631,0,false), Cell(632,0,false), Cell(633,0,false), Cell(634,0,false), Cell(635,0,false), Cell(636,0,false), Cell(637,0,false), Cell(638,0,false), Cell(639,0,false), Cell(640,0,false), Cell(641,0,false), Cell(642,0,false), Cell(643,0,false), Cell(644,0,false), Cell(645,0,false), Cell(646,0,false), Cell(647,0,false), Cell(648,0,false), Cell(649,0,false), Cell(650,0,false), Cell(651,0,false), Cell(652,0,false), Cell(653,0,false), Cell(654,0,false), Cell(655,0,false), Cell(656,0,false), Cell(657,0,false), Cell(658,0,false), Cell(659,0,false), Cell(660,0,false), Cell(661,0,false), Cell(662,0,false), Cell(663,0,false), Cell(664,0,false), Cell(665,0,false), Cell(666,0,false), Cell(667,0,false), Cell(668,0,false), Cell(669,0,false), Cell(670,0,false), Cell(671,0,false), Cell(672,0,false), Cell(673,0,false), Cell(674,0,false), Cell(675,0,false), Cell(676,0,false), Cell(677,0,false), Cell(678,0,false), Cell(679,0,false), Cell(680,0,false), Cell(681,0,false), Cell(682,0,false), Cell(683,0,false), Cell(684,0,false), Cell(685,0,false), Cell(686,0,false), Cell(687,0,false), Cell(688,0,false), Cell(689,0,false), Cell(690,0,false), Cell(691,0,false), Cell(692,0,false), Cell(693,0,false), Cell(694,0,false), Cell(695,0,false), Cell(696,0,false), Cell(697,0,false), Cell(698,0,false), Cell(699,0,false), Cell(700,0,false), Cell(701,0,false), Cell(702,0,false), Cell(703,0,false), Cell(704,0,false), Cell(705,0,false), Cell(706,0,false), Cell(707,0,false), Cell(708,0,false), Cell(709,0,false), Cell(710,0,false), Cell(711,0,false), Cell(712,0,false), Cell(713,0,false), Cell(714,0,false), Cell(715,0,false), Cell(716,0,false), Cell(717,0,false), Cell(718,0,false), Cell(719,0,false), Cell(720,0,false), Cell(721,0,false), Cell(722,0,false), Cell(723,0,false), Cell(724,0,false), Cell(725,0,false), Cell(726,0,false), Cell(727,0,false), Cell(728,0,false), Cell(729,0,false), Cell(730,0,false), Cell(731,0,false), Cell(732,0,false), Cell(733,0,false), Cell(734,0,false), Cell(735,0,false), Cell(736,0,false), Cell(737,0,false), Cell(738,0,false), Cell(739,0,false), Cell(740,0,false), Cell(741,0,false), Cell(742,0,false), Cell(743,0,false), Cell(744,0,false), Cell(745,0,false), Cell(746,0,false), Cell(747,0,false), Cell(748,0,false), Cell(749,0,false), Cell(750,0,false), Cell(751,0,false), Cell(752,0,false), Cell(753,0,false), Cell(754,0,false), Cell(755,0,false), Cell(756,0,false), Cell(757,0,false), Cell(758,0,false), Cell(759,0,false), Cell(760,0,false), Cell(761,0,false), Cell(762,0,false), Cell(763,0,false), Cell(764,0,false), Cell(765,0,false), Cell(766,0,false), Cell(767,0,false), Cell(768,0,false), Cell(769,0,false), Cell(770,0,false), Cell(771,0,false), Cell(772,0,false), Cell(773,0,false), Cell(774,0,false), Cell(775,0,false), Cell(776,0,false), Cell(777,0,false), Cell(778,0,false), Cell(779,0,false), Cell(780,0,false), Cell(781,0,false), Cell(782,0,false), Cell(783,0,false), Cell(784,0,false), Cell(785,0,false), Cell(786,0,false), Cell(787,0,false), Cell(788,0,false), Cell(789,0,false), Cell(790,0,false), Cell(791,0,false), Cell(792,0,false), Cell(793,0,false), Cell(794,0,false), Cell(795,0,false), Cell(796,0,false), Cell(797,0,false), Cell(798,0,false), Cell(799,0,false), Cell(800,0,false), Cell(801,0,false), Cell(802,0,false), Cell(803,0,false), Cell(804,0,false), Cell(805,0,false), Cell(806,0,false), Cell(807,0,false), Cell(808,0,false), Cell(809,0,false), Cell(810,0,false), Cell(811,0,false), Cell(812,0,false), Cell(813,0,false), Cell(814,0,false), Cell(815,0,false), Cell(816,0,false), Cell(817,0,false), Cell(818,0,false), Cell(819,0,false), Cell(820,0,false), Cell(821,0,false), Cell(822,0,false), Cell(823,0,false), Cell(824,0,false), Cell(825,0,false), Cell(826,0,false), Cell(827,0,false), Cell(828,0,false), Cell(829,0,false), Cell(830,0,false), Cell(831,0,false), Cell(832,0,false), Cell(833,0,false), Cell(834,0,false), Cell(835,0,false), Cell(836,0,false), Cell(837,0,false), Cell(838,0,false), Cell(839,0,false), Cell(840,0,false), Cell(841,0,false), Cell(842,0,false), Cell(843,0,false), Cell(844,0,false), Cell(845,0,false), Cell(846,0,false), Cell(847,0,false), Cell(848,0,false), Cell(849,0,false), Cell(850,0,false), Cell(851,0,false), Cell(852,0,false), Cell(853,0,false), Cell(854,0,false), Cell(855,0,false), Cell(856,0,false), Cell(857,0,false), Cell(858,0,false), Cell(859,0,false), Cell(860,0,false), Cell(861,0,false), Cell(862,0,false), Cell(863,0,false), Cell(864,0,false), Cell(865,0,false), Cell(866,0,false), Cell(867,0,false), Cell(868,0,false), Cell(869,0,false), Cell(870,0,false), Cell(871,0,false), Cell(872,0,false), Cell(873,0,false), Cell(874,0,false), Cell(875,0,false), Cell(876,0,false), Cell(877,0,false), Cell(878,0,false), Cell(879,0,false), Cell(880,0,false), Cell(881,0,false), Cell(882,0,false), Cell(883,0,false), Cell(884,0,false), Cell(885,0,false), Cell(886,0,false), Cell(887,0,false), Cell(888,0,false), Cell(889,0,false), Cell(890,0,false), Cell(891,0,false), Cell(892,0,false), Cell(893,0,false), Cell(894,0,false), Cell(895,0,false), Cell(896,0,false), Cell(897,0,false), Cell(898,0,false), Cell(899,0,false), Cell(900,0,false), Cell(901,0,false), Cell(902,0,false), Cell(903,0,false), Cell(904,0,false), Cell(905,0,false), Cell(906,0,false), Cell(907,0,false), Cell(908,0,false), Cell(909,0,false), Cell(910,0,false), Cell(911,0,false), Cell(912,0,false), Cell(913,0,false), Cell(914,0,false), Cell(915,0,false), Cell(916,0,false), Cell(917,0,false), Cell(918,0,false), Cell(919,0,false), Cell(920,0,false), Cell(921,0,false), Cell(922,0,false), Cell(923,0,false), Cell(924,0,false), Cell(925,0,false), Cell(926,0,false), Cell(927,0,false), Cell(928,0,false), Cell(929,0,false), Cell(930,0,false), Cell(931,0,false), Cell(932,0,false), Cell(933,0,false), Cell(934,0,false), Cell(935,0,false), Cell(936,0,false), Cell(937,0,false), Cell(938,0,false), Cell(939,0,false), Cell(940,0,false), Cell(941,0,false), Cell(942,0,false), Cell(943,0,false), Cell(944,0,false), Cell(945,0,false), Cell(946,0,false), Cell(947,0,false), Cell(948,0,false), Cell(949,0,false), Cell(950,0,false), Cell(951,0,false), Cell(952,0,false), Cell(953,0,false), Cell(954,0,false), Cell(955,0,false), Cell(956,0,false), Cell(957,0,false), Cell(958,0,false), Cell(959,0,false), Cell(960,0,false), Cell(961,0,false), Cell(962,0,false), Cell(963,0,false), Cell(964,0,false), Cell(965,0,false), Cell(966,0,false), Cell(967,0,false), Cell(968,0,false), Cell(969,0,false), Cell(970,0,false), Cell(971,0,false), Cell(972,0,false), Cell(973,0,false), Cell(974,0,false), Cell(975,0,false), Cell(976,0,false), Cell(977,0,false), Cell(978,0,false), Cell(979,0,false), Cell(980,0,false), Cell(981,0,false), Cell(982,0,false), Cell(983,0,false), Cell(984,0,false), Cell(985,0,false), Cell(986,0,false), Cell(987,0,false), Cell(988,0,false), Cell(989,0,false), Cell(990,0,false), Cell(991,0,false), Cell(992,0,false), Cell(993,0,false), Cell(994,0,false), Cell(995,0,false), Cell(996,0,false), Cell(997,0,false), Cell(998,0,false), Cell(999,0,false), Cell(1000,0,false), Cell(1001,0,false), Cell(1002,0,false), Cell(1003,0,false), Cell(1004,0,false), Cell(1005,0,false), Cell(1006,0,false), Cell(1007,0,false), Cell(1008,0,false), Cell(1009,0,false), Cell(1010,0,false), Cell(1011,0,false), Cell(1012,0,false), Cell(1013,0,false), Cell(1014,0,false), Cell(1015,0,false), Cell(1016,0,false), Cell(1017,0,false), Cell(1018,0,false), Cell(1019,0,false), Cell(1020,0,false), Cell(1021,0,false), Cell(1022,0,false), Cell(1023,0,false), Cell(1024,0,false), Cell(1025,0,false), Cell(1026,0,false), Cell(1027,0,false), Cell(1028,0,false), Cell(1029,0,false), Cell(1030,0,false), Cell(1031,0,false), Cell(1032,0,false), Cell(1033,0,false), Cell(1034,0,false), Cell(1035,0,false), Cell(1036,0,false), Cell(1037,0,false), Cell(1038,0,false), Cell(1039,0,false), Cell(1040,0,false), Cell(1041,0,false), Cell(1042,0,false), Cell(1043,0,false), Cell(1044,0,false), Cell(1045,0,false), Cell(1046,0,false), Cell(1047,0,false), Cell(1048,0,false), Cell(1049,0,false), Cell(1050,0,false), Cell(1051,0,false), Cell(1052,0,false), Cell(1053,0,false), Cell(1054,0,false), Cell(1055,0,false), Cell(1056,0,false), Cell(1057,0,false), Cell(1058,0,false), Cell(1059,0,false), Cell(1060,0,false), Cell(1061,0,false), Cell(1062,0,false), Cell(1063,0,false), Cell(1064,0,false), Cell(1065,0,false), Cell(1066,0,false), Cell(1067,0,false), Cell(1068,0,false), Cell(1069,0,false), Cell(1070,0,false), Cell(1071,0,false), Cell(1072,0,false), Cell(1073,0,false), Cell(1074,0,false), Cell(1075,0,false), Cell(1076,0,false), Cell(1077,0,false), Cell(1078,0,false), Cell(1079,0,false), Cell(1080,0,false), Cell(1081,0,false), Cell(1082,0,false), Cell(1083,0,false), Cell(1084,0,false), Cell(1085,0,false), Cell(1086,0,false), Cell(1087,0,false), Cell(1088,0,false), Cell(1089,0,false), Cell(1090,0,false), Cell(1091,0,false), Cell(1092,0,false), Cell(1093,0,false), Cell(1094,0,false), Cell(1095,0,false), Cell(1096,0,false), Cell(1097,0,false), Cell(1098,0,false), Cell(1099,0,false), Cell(1100,0,false), Cell(1101,0,false), Cell(1102,0,false), Cell(1103,0,false), Cell(1104,0,false), Cell(1105,0,false), Cell(1106,0,false), Cell(1107,0,false), Cell(1108,0,false), Cell(1109,0,false), Cell(1110,0,false), Cell(1111,0,false), Cell(1112,0,false), Cell(1113,0,false), Cell(1114,0,false), Cell(1115,0,false), Cell(1116,0,false), Cell(1117,0,false), Cell(1118,0,false), Cell(1119,0,false), Cell(1120,0,false), Cell(1121,0,false), Cell(1122,0,false), Cell(1123,0,false), Cell(1124,0,false), Cell(1125,0,false), Cell(1126,0,false), Cell(1127,0,false), Cell(1128,0,false), Cell(1129,0,false), Cell(1130,0,false), Cell(1131,0,false), Cell(1132,0,false), Cell(1133,0,false), Cell(1134,0,false), Cell(1135,0,false), Cell(1136,0,false), Cell(1137,0,false), Cell(1138,0,false), Cell(1139,0,false), Cell(1140,0,false), Cell(1141,0,false), Cell(1142,0,false), Cell(1143,0,false), Cell(1144,0,false), Cell(1145,0,false), Cell(1146,0,false), Cell(1147,0,false), Cell(1148,0,false), Cell(1149,0,false), Cell(1150,0,false), Cell(1151,0,false), Cell(1152,0,false), Cell(1153,0,false), Cell(1154,0,false), Cell(1155,0,false), Cell(1156,0,false), Cell(1157,0,false), Cell(1158,0,false), Cell(1159,0,false), Cell(1160,0,false), Cell(1161,0,false), Cell(1162,0,false), Cell(1163,0,false), Cell(1164,0,false), Cell(1165,0,false), Cell(1166,0,false), Cell(1167,0,false), Cell(1168,0,false), Cell(1169,0,false), Cell(1170,0,false), Cell(1171,0,false), Cell(1172,0,false), Cell(1173,0,false), Cell(1174,0,false), Cell(1175,0,false), Cell(1176,0,false), Cell(1177,0,false), Cell(1178,0,false), Cell(1179,0,false), Cell(1180,0,false), Cell(1181,0,false), Cell(1182,0,false), Cell(1183,0,false), Cell(1184,0,false), Cell(1185,0,false), Cell(1186,0,false), Cell(1187,0,false), Cell(1188,0,false), Cell(1189,0,false), Cell(1190,0,false), Cell(1191,0,false), Cell(1192,0,false), Cell(1193,0,false), Cell(1194,0,false), Cell(1195,0,false), Cell(1196,0,false), Cell(1197,0,false), Cell(1198,0,false), Cell(1199,0,false), Cell(1200,0,false), Cell(1201,0,false), Cell(1202,0,false), Cell(1203,0,false), Cell(1204,0,false), Cell(1205,0,false), Cell(1206,0,false), Cell(1207,0,false), Cell(1208,0,false), Cell(1209,0,false), Cell(1210,0,false), Cell(1211,0,false), Cell(1212,0,false), Cell(1213,0,false), Cell(1214,0,false), Cell(1215,0,false), Cell(1216,0,false), Cell(1217,0,false), Cell(1218,0,false), Cell(1219,0,false), Cell(1220,0,false), Cell(1221,0,false), Cell(1222,0,false), Cell(1223,0,false), Cell(1224,0,false), Cell(1225,0,false), Cell(1226,0,false), Cell(1227,0,false), Cell(1228,0,false), Cell(1229,0,false), Cell(1230,0,false), Cell(1231,0,false), Cell(1232,0,false), Cell(1233,0,false), Cell(1234,0,false), Cell(1235,0,false), Cell(1236,0,false), Cell(1237,0,false), Cell(1238,0,false), Cell(1239,0,false), Cell(1240,0,false), Cell(1241,0,false), Cell(1242,0,false), Cell(1243,0,false), Cell(1244,0,false), Cell(1245,0,false), Cell(1246,0,false), Cell(1247,0,false), Cell(1248,0,false), Cell(1249,0,false), Cell(1250,0,false), Cell(1251,0,false), Cell(1252,0,false), Cell(1253,0,false), Cell(1254,0,false), Cell(1255,0,false), Cell(1256,0,false), Cell(1257,0,false), Cell(1258,0,false), Cell(1259,0,false), Cell(1260,0,false), Cell(1261,0,false), Cell(1262,0,false), Cell(1263,0,false), Cell(1264,0,false), Cell(1265,0,false), Cell(1266,0,false), Cell(1267,0,false), Cell(1268,0,false), Cell(1269,0,false), Cell(1270,0,false), Cell(1271,0,false), Cell(1272,0,false), Cell(1273,0,false), Cell(1274,0,false), Cell(1275,0,false), Cell(1276,0,false), Cell(1277,0,false), Cell(1278,0,false), Cell(1279,0,false), Cell(1280,0,false), Cell(1281,0,false), Cell(1282,0,false), Cell(1283,0,false), Cell(1284,0,false), Cell(1285,0,false), Cell(1286,0,false), Cell(1287,0,false), Cell(1288,0,false), Cell(1289,0,false), Cell(1290,0,false), Cell(1291,0,false), Cell(1292,0,false), Cell(1293,0,false), Cell(1294,0,false), Cell(1295,0,false), Cell(1296,0,false), Cell(1297,0,false), Cell(1298,0,false), Cell(1299,0,false), Cell(1300,0,false), Cell(1301,0,false), Cell(1302,0,false), Cell(1303,0,false), Cell(1304,0,false), Cell(1305,0,false), Cell(1306,0,false), Cell(1307,0,false), Cell(1308,0,false), Cell(1309,0,false), Cell(1310,0,false), Cell(1311,0,false), Cell(1312,0,false), Cell(1313,0,false), Cell(1314,0,false), Cell(1315,0,false), Cell(1316,0,false), Cell(1317,0,false), Cell(1318,0,false), Cell(1319,0,false), Cell(1320,0,false), Cell(1321,0,false), Cell(1322,0,false), Cell(1323,0,false), Cell(1324,0,false), Cell(1325,0,false), Cell(1326,0,false), Cell(1327,0,false), Cell(1328,0,false), Cell(1329,0,false), Cell(1330,0,false), Cell(1331,0,false), Cell(1332,0,false), Cell(1333,0,false), Cell(1334,0,false), Cell(1335,0,false), Cell(1336,0,false), Cell(1337,0,false), Cell(1338,0,false), Cell(1339,0,false), Cell(1340,0,false), Cell(1341,0,false), Cell(1342,0,false), Cell(1343,0,false), Cell(1344,0,false), Cell(1345,0,false), Cell(1346,0,false), Cell(1347,0,false), Cell(1348,0,false), Cell(1349,0,false), Cell(1350,0,false), Cell(1351,0,false), Cell(1352,0,false), Cell(1353,0,false), Cell(1354,0,false), Cell(1355,0,false), Cell(1356,0,false), Cell(1357,0,false), Cell(1358,0,false), Cell(1359,0,false), Cell(1360,0,false), Cell(1361,0,false), Cell(1362,0,false), Cell(1363,0,false), Cell(1364,0,false), Cell(1365,0,false), Cell(1366,0,false), Cell(1367,0,false), Cell(1368,0,false), Cell(1369,0,false), Cell(1370,0,false), Cell(1371,0,false), Cell(1372,0,false), Cell(1373,0,false), Cell(1374,0,false), Cell(1375,0,false), Cell(1376,0,false), Cell(1377,0,false), Cell(1378,0,false), Cell(1379,0,false), Cell(1380,0,false), Cell(1381,0,false), Cell(1382,0,false), Cell(1383,0,false), Cell(1384,0,false), Cell(1385,0,false), Cell(1386,0,false), Cell(1387,0,false), Cell(1388,0,false), Cell(1389,0,false), Cell(1390,0,false), Cell(1391,0,false), Cell(1392,0,false), Cell(1393,0,false), Cell(1394,0,false), Cell(1395,0,false), Cell(1396,0,false), Cell(1397,0,false), Cell(1398,0,false), Cell(1399,0,false), Cell(1400,0,false), Cell(1401,0,false), Cell(1402,0,false), Cell(1403,0,false), Cell(1404,0,false), Cell(1405,0,false), Cell(1406,0,false), Cell(1407,0,false), Cell(1408,0,false), Cell(1409,0,false), Cell(1410,0,false), Cell(1411,0,false), Cell(1412,0,false), Cell(1413,0,false), Cell(1414,0,false), Cell(1415,0,false), Cell(1416,0,false), Cell(1417,0,false), Cell(1418,0,false), Cell(1419,0,false), Cell(1420,0,false), Cell(1421,0,false), Cell(1422,0,false), Cell(1423,0,false), Cell(1424,0,false), Cell(1425,0,false), Cell(1426,0,false), Cell(1427,0,false), Cell(1428,0,false), Cell(1429,0,false), Cell(1430,0,false), Cell(1431,0,false), Cell(1432,0,false), Cell(1433,0,false), Cell(1434,0,false), Cell(1435,0,false), Cell(1436,0,false), Cell(1437,0,false), Cell(1438,0,false), Cell(1439,0,false), Cell(1440,0,false), Cell(1441,0,false), Cell(1442,0,false), Cell(1443,0,false) ]; 
}

// this returns a list of neighbors that need to be updated for a certain id. It does not change the board directly.
var updateNeighbors = function(id){
		result = [];
		if (id % BOARD_WIDTH === 0){
			neighborIds = [id - BOARD_WIDTH, id - BOARD_WIDTH + 1, id + 1, id + BOARD_WIDTH, id + BOARD_WIDTH + 1];
		}
		else if (id % BOARD_WIDTH === BOARD_WIDTH - 1){
			neighborIds = [id - BOARD_WIDTH - 1, id - BOARD_WIDTH, id - 1, id + BOARD_WIDTH - 1, id + BOARD_WIDTH];
		}
		else{
			neighborIds = [id-BOARD_WIDTH-1, id-BOARD_WIDTH, id-BOARD_WIDTH +1, id-1, id+1, id+BOARD_WIDTH-1, id+BOARD_WIDTH, id+BOARD_WIDTH +1];
		}
		for (var i=0;i<neighborIds.length;i++){
			if (neighborIds[i]>=0 && neighborIds[i]<board.length){
				result.push(neighborIds[i]);
			}
		}
		return result
};

// This function creates a random board of squares for game of life
var createRandomBoard = function(){
	var aliveList = [];
	var incrementList = [];
	for (var i = 0; i < BOARD_SIZE; i++){
		alive = false
		if (Math.random() >= .5){
			alive = true
			aliveList.push(i);
		}
		board.push(Cell(i, 0, alive));
	}
	for (var i = 0; i < aliveList.length; i++){
		$.merge(incrementList, updateNeighbors(aliveList[i]));
	}
	if (incrementList.length > 0){
		for (var i = 0; i < incrementList.length;i++){
				board[incrementList[i]].neighbors++;						
		}
	} 
};

// This function creates a random board of squares for game of life
var createBoard = function(){
	for (var i = 0; i < BOARD_SIZE; i++){
		board.push(Cell(i, 0, false));
	}
};

// Displays the new state of the board based on the current board object
var displayGrid = function(){
	for (var i = 0; i < BOARD_SIZE; i++){
		$('#' + i).removeClass();
		$('#' + i).addClass("cell");
		if (board[i].isAlive === true){
			$('#' + i).addClass("liveCell");
		}
	};

};

// creates all the divs that will be associated with each Cell object
var createDivs = function(){
	for (var i = 0; i < BOARD_SIZE; i++){
		$("#board").append("<div id = " + i + "></div>");
		$("#" + i).addClass("cell");
		$("#" + i).css({
			"margin-left": (i % BOARD_WIDTH) * CELL_WIDTH, 
			"margin-top": Math.floor(i / BOARD_WIDTH) * CELL_WIDTH,
			"width": CELL_WIDTH + "px",
			"height": CELL_WIDTH + "px"
		});
		$( "#" + i).click(function(){
			cell = board[this.id];
			if (cell.isAlive === true){
				cell.isAlive = false;
				decrementList = updateNeighbors(parseInt(this.id));
				for (var i=0; i < decrementList.length; i++){
					board[decrementList[i]].neighbors--;
				}
			}
			else if (cell.isAlive === false){
				cell.isAlive = true;
				incrementList = updateNeighbors(parseInt(this.id));
				for (var i = 0; i < incrementList.length; i++){
					board[incrementList[i]].neighbors++;
				}
			}
			displayGrid();
		});
	}
};


// updates the board object using the rules of the game of life
var updateBoard = function(){
	var incrementList = [];
	var decrementList = [];
	for (var i = 0; i < BOARD_SIZE; i++){	
		var cell = board[i];
		if (cell.isAlive === true){
			if (cell.neighbors < 2){
				cell.isAlive = false;
				$.merge(decrementList, updateNeighbors(i));
			}
			else if (cell.neighbors > 3){
				cell.isAlive = false;
				$.merge(decrementList, updateNeighbors(i));
			}
		}
		else{
			if (cell.neighbors === 3){
				cell.isAlive = true;
				$.merge(incrementList, updateNeighbors(i));
			}
		}
	}
	if (incrementList.length > 0){
		for (var i = 0;i < incrementList.length; i++){
			board[incrementList[i]].neighbors++;
		}
	}
	if (decrementList.length > 0){
		for (var i = 0; i < decrementList.length; i++){
			board[decrementList[i]].neighbors--;
		}
	}
};

// runs the game of life
var run = function(){
	intervalID = setInterval(
		function(){
			// update the board
			updateBoard();

			// display newly updated board
			displayGrid();
		}, 
		INTERVAL_SPEED);
		
		isRunning = true;
};

// prints the board, this is used for testing purposes 
var printBoard = function(){
	text="[";
	for (var i = 0; i < BOARD_SIZE; i++){
		text = text + "Cell(" + i + "," + board[i].neighbors + "," + board[i].isAlive + "), ";        
	}
	text = text + "]";
	console.log(text);
};

// listenr for the run button
$('#runBtn').click(
	function(){
		if (isRunning === false){
			run();
		}
	}
);

//listener for the stop button
$('#stopBtn').click(
	function(){
		clearInterval(intervalID);
		isRunning = false;
	}
);

//listener for the clear button
$('#clearBtn').click(
	function(){
		clearInterval(intervalID);
		board = [];
		createBoard();
		displayGrid();
		isRunning = false;
	}
);

//listener for the random button
$('#randomBtn').click(
	function(){
		clearInterval(intervalID);
		board = [];
		createRandomBoard();
		displayGrid();
		isRunning = false;
	}
);

//listener for the glider button
$('#gliderBtn').click(
	function(){
		clearInterval(intervalID);
		board = getGlider();
		displayGrid();
		isRunning = false;
	}
);

$("#speedDrop").change(function() {
	var value = $(this).val();
	if (value === "slow"){
		INTERVAL_SPEED = 800;
	}
	else if (value === "medium"){
		INTERVAL_SPEED = 500;
	}
	else if (value === "fast"){
		INTERVAL_SPEED = 200;
	}
	else if (value === "really_fast"){
		INTERVAL_SPEED = 10;
	}
	if (isRunning == true){
		clearInterval(intervalID);
		run();
	}

});

(function () {

	// create the random board
	createBoard();

	// create the divs on the board
	createDivs();

	// using the current state of the board display the board
	displayGrid();

}) ();