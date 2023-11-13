import { defineStore } from 'pinia';

export const ProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      fullName: 'andre putra',
      listPairings: [
        {
          "_id": "MqwJcp3uFA8fPgKMn",
          "evaluateId": "qTGJgbarwESf4YP33",
          "evaluatee": {
            "fullname": "Puji Errawati"
          },
          "templateId": "WZW8Fwbh738ap5RJ2",
          "template": {
            "_id": "WZW8Fwbh738ap5RJ2",
            "name": "dp3 kepsek (ortu / siswa)",
            "items": [
              {
                "itemId": "GMNgSceHQzf4NkK4f",
                "question": "Kepala Sekolah menunjukkan hati yang penuh kasih, pemikiran yang cerdas, dan perilaku yang santun dalam pekerjaannya.",
                "answers": [
                  {
                    "label": "Menunjukkan 3 sikap meliputi hati penuh kasih, pemikiran cerdas, dan perilaku santun.",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan hanya 2 sikap antara hati penuh kasih, pemikiran cerdas, dan perilaku santun.",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menunjukkan hanya 1 sikap antara hati penuh kasih, pemikiran cerdas, dan perilaku santun.",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak menunjukkan salah 1 diantara ketiga hal tersebut.",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 1,
                "groupId": "qmqEEq6YGswvvfPEM",
                "sectionTitle": "KATOLISITAS"
              },
              {
                "itemId": "3fxBH2rCFXAdesro9",
                "question": "Kepala sekolah memiliki integritas kepribadian sebagai pemimpin.",
                "answers": [
                  {
                    "label": "Menunjukkan keselarasan antara perilaku dan tutur kata sebagai pemimpin dalam menghadapi masalah secara konsisten",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan keselarasan antara perilaku dan tutur kata sebagai pemimpin dalam menghadapi masalah, namun tidak konsisten",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak pernah menunjukkan keselarasan antara perilaku dan tutur kata sebagai pemimpin dalam menghadapi masalah",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 2,
                "groupId": "qmqEEq6YGswvvfPEM",
                "sectionTitle": "KATOLISITAS"
              },
              {
                "itemId": "mTTkF6ytsNbwmrbdF",
                "question": "Kepala Sekolah berkata dan berbuat apa yang sebenarnya.",
                "answers": [
                  {
                    "label": "Kepala Sekolah berkata dan berbuat yang sebenarnya",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "value": 3,
                    "order": 2
                  },
                  {
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Kepala Sekolah tidak berkata dan berbuat yang sebenarnya",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 3,
                "groupId": "qmqEEq6YGswvvfPEM",
                "sectionTitle": "KATOLISITAS"
              },
              {
                "itemId": "hsmYJxTti8SqLzjYH",
                "question": "Kepala Sekolah mampu menjadi teladan bagi siapapun.",
                "answers": [
                  {
                    "label": "Kepala Sekolah melakukan perbuatan baik yang dapat mempengaruhi lingkungan untuk melakukan / mengikuti.",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Kepala Sekolah mampu melakukan perbuatan baik tetapi kurang berpengaruh pada lingkungannya.",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Kepala Sekolah melakukan perbuatan yang kurang dapat diterima lingkungannya.",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Kepala Sekolah melakukan perbuatan tercela.",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 4,
                "groupId": "47rjhuBLcs5oFbBGQ",
                "sectionTitle": "KATOLISITAS"
              },
              {
                "itemId": "kaS3pMLwjmMXhi3GK",
                "question": "Kepala Sekolah berperilaku sopan kepada pihak yayasan, guru karyawan, siswa, dan orangtua siswa.",
                "answers": [
                  {
                    "label": "Sopan dalam berelasi dengan seluruh pihak.",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Hanya sopan kepada 3 pihak tertentu antara yayasan, guru / karyawan, siswa, dan orangtua siswa",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Hanya sopan kepada 2 pihak tertentu antara yayasan, guru / karyawan, siswa, dan orangtua siswa",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Hanya sopan kepada 1 pihak tertentu antara yayasan, guru / karyawan, siswa, dan orangtua siswa",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 5,
                "groupId": "47rjhuBLcs5oFbBGQ",
                "sectionTitle": "KATOLISITAS"
              },
              {
                "itemId": "62yNdTiiYf2nHYooQ",
                "question": "Kepala Sekolah memberikan pelayanan kepada siswa / orangtua dengan sabar, ramah, menghormati, dan tidak membedakan yang dilayani.",
                "answers": [
                  {
                    "label": "Menunjukkan sikap pelayanan yang sabar, ramah, menghormati, dan tidak membeda-bedakan",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan hanya 3 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menunjukkan 2 sikap antara sabar, ramah, menghormati dan tidak membeda-bedakan.",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Menunjukkan 1 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 1,
                "groupId": "Wx7LR2JitGgRyehrk",
                "sectionTitle": "PROFESIONALITAS"
              }
            ],
            "sections": [
              {
                "title": "KATOLISITAS",
                "items": [
                  {
                    "itemId": "GMNgSceHQzf4NkK4f",
                    "question": "Kepala Sekolah menunjukkan hati yang penuh kasih, pemikiran yang cerdas, dan perilaku yang santun dalam pekerjaannya.",
                    "answers": [
                      {
                        "label": "Menunjukkan 3 sikap meliputi hati penuh kasih, pemikiran cerdas, dan perilaku santun.",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan hanya 2 sikap antara hati penuh kasih, pemikiran cerdas, dan perilaku santun.",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menunjukkan hanya 1 sikap antara hati penuh kasih, pemikiran cerdas, dan perilaku santun.",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak menunjukkan salah 1 diantara ketiga hal tersebut.",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 1,
                    "groupId": "qmqEEq6YGswvvfPEM",
                    "sectionTitle": "KATOLISITAS"
                  },
                  {
                    "itemId": "3fxBH2rCFXAdesro9",
                    "question": "Kepala sekolah memiliki integritas kepribadian sebagai pemimpin.",
                    "answers": [
                      {
                        "label": "Menunjukkan keselarasan antara perilaku dan tutur kata sebagai pemimpin dalam menghadapi masalah secara konsisten",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan keselarasan antara perilaku dan tutur kata sebagai pemimpin dalam menghadapi masalah, namun tidak konsisten",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak pernah menunjukkan keselarasan antara perilaku dan tutur kata sebagai pemimpin dalam menghadapi masalah",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 2,
                    "groupId": "qmqEEq6YGswvvfPEM",
                    "sectionTitle": "KATOLISITAS"
                  },
                  {
                    "itemId": "mTTkF6ytsNbwmrbdF",
                    "question": "Kepala Sekolah berkata dan berbuat apa yang sebenarnya.",
                    "answers": [
                      {
                        "label": "Kepala Sekolah berkata dan berbuat yang sebenarnya",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "value": 3,
                        "order": 2
                      },
                      {
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Kepala Sekolah tidak berkata dan berbuat yang sebenarnya",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 3,
                    "groupId": "qmqEEq6YGswvvfPEM",
                    "sectionTitle": "KATOLISITAS"
                  },
                  {
                    "itemId": "hsmYJxTti8SqLzjYH",
                    "question": "Kepala Sekolah mampu menjadi teladan bagi siapapun.",
                    "answers": [
                      {
                        "label": "Kepala Sekolah melakukan perbuatan baik yang dapat mempengaruhi lingkungan untuk melakukan / mengikuti.",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Kepala Sekolah mampu melakukan perbuatan baik tetapi kurang berpengaruh pada lingkungannya.",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Kepala Sekolah melakukan perbuatan yang kurang dapat diterima lingkungannya.",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Kepala Sekolah melakukan perbuatan tercela.",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 4,
                    "groupId": "47rjhuBLcs5oFbBGQ",
                    "sectionTitle": "KATOLISITAS"
                  },
                  {
                    "itemId": "kaS3pMLwjmMXhi3GK",
                    "question": "Kepala Sekolah berperilaku sopan kepada pihak yayasan, guru karyawan, siswa, dan orangtua siswa.",
                    "answers": [
                      {
                        "label": "Sopan dalam berelasi dengan seluruh pihak.",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Hanya sopan kepada 3 pihak tertentu antara yayasan, guru / karyawan, siswa, dan orangtua siswa",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Hanya sopan kepada 2 pihak tertentu antara yayasan, guru / karyawan, siswa, dan orangtua siswa",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Hanya sopan kepada 1 pihak tertentu antara yayasan, guru / karyawan, siswa, dan orangtua siswa",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 5,
                    "groupId": "47rjhuBLcs5oFbBGQ",
                    "sectionTitle": "KATOLISITAS"
                  }
                ],
                "order": 0
              },
              {
                "title": "PROFESIONALITAS",
                "items": [
                  {
                    "itemId": "62yNdTiiYf2nHYooQ",
                    "question": "Kepala Sekolah memberikan pelayanan kepada siswa / orangtua dengan sabar, ramah, menghormati, dan tidak membedakan yang dilayani.",
                    "answers": [
                      {
                        "label": "Menunjukkan sikap pelayanan yang sabar, ramah, menghormati, dan tidak membeda-bedakan",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan hanya 3 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menunjukkan 2 sikap antara sabar, ramah, menghormati dan tidak membeda-bedakan.",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Menunjukkan 1 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 1,
                    "groupId": "Wx7LR2JitGgRyehrk",
                    "sectionTitle": "PROFESIONALITAS"
                  }
                ],
                "order": 0
              }
            ]
          }
        },
        {
          "_id": "nz9EuCqc4dm3fcyct",
          "evaluateId": "gFnxd2Yy4g5LZE3Fw",
          "evaluatee": {
            "fullname": "Maria Tri Prasetyawati, S.Pd."
          },
          "templateId": "Zvz6FQ2J9zSPgm9Dr",
          "template": {
            "_id": "Zvz6FQ2J9zSPgm9Dr",
            "name": "DP3 GURU TK (ORTU)",
            "items": [
              {
                "itemId": "qpXLh7TkuwGQEZp2p",
                "question": "Guru menunjukkan hati yang penuh kasih, pemikiran yang cerdas, dan perbuatan yang santun dalam pekerjaannya",
                "answers": [
                  {
                    "label": "Menunjukkan ketiga sikap : kasih, cerdas, santun",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan hanya 2 sikap antara kasih, cerdas, santun",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menunjukkan hanya 1 sikap antara kasih, cerdas, santun",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak menunjukkan 1 pun sikap kasih, cerdas, santun",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 1,
                "groupId": "FTKtvyCfRwcfi2ZBg",
                "sectionTitle": "KEPRIBADIAN"
              },
              {
                "itemId": "xoJ4LBPFncqKcGXfN",
                "question": "Guru berkata dan berbuat apa yang sebenarnya.",
                "answers": [
                  {
                    "label": "Guru berkata dan berbuat yang sebenarnya",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "value": 3,
                    "order": 2
                  },
                  {
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Guru tidak berkata dan berbuat yang sebenarnya",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 2,
                "groupId": "oqDeNMq9hpZe2dApy",
                "sectionTitle": "KEPRIBADIAN"
              },
              {
                "itemId": "d2WLNAJNfDafX666m",
                "question": "Guru memberikan pelayanan kepada siswa/orang tua dengan sabar, ramah, menghormati, dan tidak membeda-bedakan yang dilayani.",
                "answers": [
                  {
                    "label": "Menunjukkan sikap pelayanan yang sabar, ramah, menghormati, dan tidak membeda-bedakan",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan hanya 3 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menunjukkan 2 sikap antara sabar, ramah, menghormati dan tidak membeda-bedakan.",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Menunjukkan 1 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 3,
                "groupId": "oqDeNMq9hpZe2dApy",
                "sectionTitle": "KEPRIBADIAN"
              },
              {
                "itemId": "ZHRXHMKrRTrKdfBNC",
                "question": "Guru menguasai IT untuk menunjang pembelajaran",
                "answers": [
                  {
                    "label": "Menguasai dan mampu menggunakan IT dalam pembelajaran",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Kurang menguasai tetapi mau belajar menggunakan IT dalam pembelajaran",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menguasai tetapi tidak mau menggunakan IT dalam pembelajaran",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak mampu dan tidak mau belajar menggunakan IT",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 4,
                "groupId": "zZFjQSvLDvog5ER4j",
                "sectionTitle": "KEPRIBADIAN"
              },
              {
                "itemId": "EExQTc72HA2WeGbQY",
                "question": "Guru mampu menjadi teladan bagi siapapun",
                "answers": [
                  {
                    "label": "Melakukan perbuatan baik yang mampu mempengaruhi lingkungan untuk melakukan/mengikuti",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Mampu melakukan perbuatan baik tetapi kurang berpengaruh pada lingkungannya",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Melakukan perbuatan yang kurang dapat diterima lingkungannya",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Melakukan perbuatan tercela",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 5,
                "groupId": "r5houzdmRptsS5yKA",
                "sectionTitle": "KEPRIBADIAN"
              },
              {
                "itemId": "6NYPJZRApsETuS9nD",
                "question": "Guru menguasai materi pelajaran.",
                "answers": [
                  {
                    "label": "Menguasai seluruh materi pelajaran",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menguasai sebagian besar materi pelajaran",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menguasai sebagian kecil materi pelajaran",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Kurang menguasai materi pelajaran",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 1,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "LD53iTbYNFZPPpwSr",
                "question": "Guru mengajar menggunakan berbagai sumber belajar, media pembelajaran yang variatif dengan baik, metode pembelajaran yang relevan, dan berkomunikasi dengan siswa.",
                "answers": [
                  {
                    "label": "Menunjukkan 4 komponen",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan 3 komponen",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menunjukkan 2 komponen",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Menunjukkan 1 komponen",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 2,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "vFCvJxhFCnCviWYgv",
                "question": "Guru membimbing siswa yang kesulitan belajar.",
                "answers": [
                  {
                    "label": "Selalu mengidentifikasi kesulitan belajar siswa dan memberikan bimbingan.",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Memberikan bimbingan ketika siswa menyampaikan kesulitannya.",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Memberikan bimbingan kepada siswa yang kesulitan belajar ketika ada waktu luang",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak pernah membimbing siswa yang kesulitan belajar",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 3,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "BzAmRhRfk29EnHrQj",
                "question": "Guru mampu menciptakan suasana pembelajaran yang tertib, menyenangkan, aktif, dan parsipatif.",
                "answers": [
                  {
                    "label": "Menunjukkan 4 komponen di atas",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menunjukkan 3 komponen di atas",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menunjukkan 2 komponen di atas",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Menunjukkan 1 komponen di atas",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 4,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "5Zpd5PRatEXF2ckeW",
                "question": "Guru memiliki kemampuan bertanya kepada siswa.",
                "answers": [
                  {
                    "label": "Seringkali memberi pertanyaan yang merangsang berpikir kritis siswa sesuai konteks yang dipelajari selama pembelajaran",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Lebih sering memberi pertanyaan umum yang dapat dijawab oleh siswa selama pembelajaran",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Lebih sering memberi pertanyaan yang jawabannya sudah terdapat dalam buku pegangan siswa selama pembelajaran",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak pernah mengajukan pertanyaan selama proses pembelajaran",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 5,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "Dv4aeY2n68Rh5hH8d",
                "question": "Guru memberi kesempatan bertanya kepada siswa terkait materi pelajaran.",
                "answers": [
                  {
                    "label": "Selalu memberi kesempatan bertanya kepada siswa dan menanggapi pertanyaan setiap siswa dengan jawaban yang tepat.",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Memberi kesempatan bertanya kepada siswa dan menanggapi pertanyaan yang menarik saja.",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Memberi kesempatan bertanya kepada siswa, namun tidak menanggapi atau memberi jawaban terhadap pertanyaan tersebut.",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak pernah memberi kesempatan bertanya kepada siswa.",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 6,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "tQAtHwmu7DTBp5s8F",
                "question": "Guru menggunakan bahasa pengantar yang baik dan benar",
                "answers": [
                  {
                    "label": "Menguasai Bahasa Pengantar dengan baik dan benar",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menguasai Bahasa Pengantar dengan benar",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menguasai Bahasa Pengantar dengan baik",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Kurang menguasai kaidah Bahasa Pengantar",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 7,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "k4bdwJdPxDNFhS4nA",
                "question": "Guru mampu menggunakan media pengajaran dan mengolah sumber-sumber belajar",
                "answers": [
                  {
                    "label": "Menggunakan media pengajaran dalam setiap pengajaran",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Menggunakan media pengajaran dalam sebagian besar pengajaran",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Menggunakan media pengajaran dalam sebagian kecil pengajaran",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Tidak menggunakan media pengajaran dalam setiap pengajaran",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 8,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "vpfjDYaZYPRTRMbbc",
                "question": "Guru memiliki penampilan yang baik meliputi sopan, ramah, tutur kata halus dan rapi",
                "answers": [
                  {
                    "label": "Menunjukkan 4 sikap meliputi sopan, ramah. tutur kata halus, rapi",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Hanya menunjukkan 3 sikap di antara sopan, ramah, tutur kata halus, rapi",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Hanya menunjukkan 2 sikap di antara sopan, ramah, tutur kata halus, rapi",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Hanya menunjukkan 1 sikap di antara sopan, ramah, tutur kata halus, rapi",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 9,
                "groupId": "h5mtjuYqKJkbeggFg",
                "sectionTitle": "PROFESIONALITAS"
              },
              {
                "itemId": "Fy9ehHphjaqoQxBak",
                "question": "Guru membagi hasil pekerjaan siswa dan melakukan pembahasan.",
                "answers": [
                  {
                    "label": "Guru membagi hasil pekerjaan siswa tepat waktu dan melakukan pembahasan secara menyeluruh.",
                    "value": 4,
                    "order": 1
                  },
                  {
                    "label": "Guru membagi hasil pekerjaan siswa tepat waktu dan melakukan pembahasan pada beberapa soal saja.",
                    "value": 3,
                    "order": 2
                  },
                  {
                    "label": "Guru membagi hasil pekerjaan siswa tidak tepat waktu dan melakukan pembahasan pada beberapa soal saja.",
                    "value": 2,
                    "order": 3
                  },
                  {
                    "label": "Guru tidak pernah membagi hasil pekerjaan siswa dan tidak melakukan pembahasan soal.",
                    "value": 1,
                    "order": 4
                  }
                ],
                "ordering": 10,
                "groupId": "kqAwBbsT9rJjrnmdu",
                "sectionTitle": "PROFESIONALITAS"
              }
            ],
            "sections": [
              {
                "title": "KEPRIBADIAN",
                "items": [
                  {
                    "itemId": "qpXLh7TkuwGQEZp2p",
                    "question": "Guru menunjukkan hati yang penuh kasih, pemikiran yang cerdas, dan perbuatan yang santun dalam pekerjaannya",
                    "answers": [
                      {
                        "label": "Menunjukkan ketiga sikap : kasih, cerdas, santun",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan hanya 2 sikap antara kasih, cerdas, santun",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menunjukkan hanya 1 sikap antara kasih, cerdas, santun",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak menunjukkan 1 pun sikap kasih, cerdas, santun",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 1,
                    "groupId": "FTKtvyCfRwcfi2ZBg",
                    "sectionTitle": "KEPRIBADIAN"
                  },
                  {
                    "itemId": "xoJ4LBPFncqKcGXfN",
                    "question": "Guru berkata dan berbuat apa yang sebenarnya.",
                    "answers": [
                      {
                        "label": "Guru berkata dan berbuat yang sebenarnya",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "value": 3,
                        "order": 2
                      },
                      {
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Guru tidak berkata dan berbuat yang sebenarnya",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 2,
                    "groupId": "oqDeNMq9hpZe2dApy",
                    "sectionTitle": "KEPRIBADIAN"
                  },
                  {
                    "itemId": "d2WLNAJNfDafX666m",
                    "question": "Guru memberikan pelayanan kepada siswa/orang tua dengan sabar, ramah, menghormati, dan tidak membeda-bedakan yang dilayani.",
                    "answers": [
                      {
                        "label": "Menunjukkan sikap pelayanan yang sabar, ramah, menghormati, dan tidak membeda-bedakan",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan hanya 3 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menunjukkan 2 sikap antara sabar, ramah, menghormati dan tidak membeda-bedakan.",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Menunjukkan 1 sikap antara sabar, ramah, menghormati, dan tidak membeda-bedakan",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 3,
                    "groupId": "oqDeNMq9hpZe2dApy",
                    "sectionTitle": "KEPRIBADIAN"
                  },
                  {
                    "itemId": "ZHRXHMKrRTrKdfBNC",
                    "question": "Guru menguasai IT untuk menunjang pembelajaran",
                    "answers": [
                      {
                        "label": "Menguasai dan mampu menggunakan IT dalam pembelajaran",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Kurang menguasai tetapi mau belajar menggunakan IT dalam pembelajaran",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menguasai tetapi tidak mau menggunakan IT dalam pembelajaran",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak mampu dan tidak mau belajar menggunakan IT",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 4,
                    "groupId": "zZFjQSvLDvog5ER4j",
                    "sectionTitle": "KEPRIBADIAN"
                  },
                  {
                    "itemId": "EExQTc72HA2WeGbQY",
                    "question": "Guru mampu menjadi teladan bagi siapapun",
                    "answers": [
                      {
                        "label": "Melakukan perbuatan baik yang mampu mempengaruhi lingkungan untuk melakukan/mengikuti",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Mampu melakukan perbuatan baik tetapi kurang berpengaruh pada lingkungannya",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Melakukan perbuatan yang kurang dapat diterima lingkungannya",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Melakukan perbuatan tercela",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 5,
                    "groupId": "r5houzdmRptsS5yKA",
                    "sectionTitle": "KEPRIBADIAN"
                  }
                ],
                "order": 0
              },
              {
                "title": "PROFESIONALITAS",
                "items": [
                  {
                    "itemId": "6NYPJZRApsETuS9nD",
                    "question": "Guru menguasai materi pelajaran.",
                    "answers": [
                      {
                        "label": "Menguasai seluruh materi pelajaran",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menguasai sebagian besar materi pelajaran",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menguasai sebagian kecil materi pelajaran",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Kurang menguasai materi pelajaran",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 1,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "LD53iTbYNFZPPpwSr",
                    "question": "Guru mengajar menggunakan berbagai sumber belajar, media pembelajaran yang variatif dengan baik, metode pembelajaran yang relevan, dan berkomunikasi dengan siswa.",
                    "answers": [
                      {
                        "label": "Menunjukkan 4 komponen",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan 3 komponen",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menunjukkan 2 komponen",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Menunjukkan 1 komponen",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 2,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "vFCvJxhFCnCviWYgv",
                    "question": "Guru membimbing siswa yang kesulitan belajar.",
                    "answers": [
                      {
                        "label": "Selalu mengidentifikasi kesulitan belajar siswa dan memberikan bimbingan.",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Memberikan bimbingan ketika siswa menyampaikan kesulitannya.",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Memberikan bimbingan kepada siswa yang kesulitan belajar ketika ada waktu luang",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak pernah membimbing siswa yang kesulitan belajar",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 3,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "BzAmRhRfk29EnHrQj",
                    "question": "Guru mampu menciptakan suasana pembelajaran yang tertib, menyenangkan, aktif, dan parsipatif.",
                    "answers": [
                      {
                        "label": "Menunjukkan 4 komponen di atas",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menunjukkan 3 komponen di atas",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menunjukkan 2 komponen di atas",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Menunjukkan 1 komponen di atas",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 4,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "5Zpd5PRatEXF2ckeW",
                    "question": "Guru memiliki kemampuan bertanya kepada siswa.",
                    "answers": [
                      {
                        "label": "Seringkali memberi pertanyaan yang merangsang berpikir kritis siswa sesuai konteks yang dipelajari selama pembelajaran",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Lebih sering memberi pertanyaan umum yang dapat dijawab oleh siswa selama pembelajaran",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Lebih sering memberi pertanyaan yang jawabannya sudah terdapat dalam buku pegangan siswa selama pembelajaran",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak pernah mengajukan pertanyaan selama proses pembelajaran",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 5,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "Dv4aeY2n68Rh5hH8d",
                    "question": "Guru memberi kesempatan bertanya kepada siswa terkait materi pelajaran.",
                    "answers": [
                      {
                        "label": "Selalu memberi kesempatan bertanya kepada siswa dan menanggapi pertanyaan setiap siswa dengan jawaban yang tepat.",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Memberi kesempatan bertanya kepada siswa dan menanggapi pertanyaan yang menarik saja.",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Memberi kesempatan bertanya kepada siswa, namun tidak menanggapi atau memberi jawaban terhadap pertanyaan tersebut.",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak pernah memberi kesempatan bertanya kepada siswa.",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 6,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "tQAtHwmu7DTBp5s8F",
                    "question": "Guru menggunakan bahasa pengantar yang baik dan benar",
                    "answers": [
                      {
                        "label": "Menguasai Bahasa Pengantar dengan baik dan benar",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menguasai Bahasa Pengantar dengan benar",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menguasai Bahasa Pengantar dengan baik",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Kurang menguasai kaidah Bahasa Pengantar",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 7,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "k4bdwJdPxDNFhS4nA",
                    "question": "Guru mampu menggunakan media pengajaran dan mengolah sumber-sumber belajar",
                    "answers": [
                      {
                        "label": "Menggunakan media pengajaran dalam setiap pengajaran",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Menggunakan media pengajaran dalam sebagian besar pengajaran",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Menggunakan media pengajaran dalam sebagian kecil pengajaran",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Tidak menggunakan media pengajaran dalam setiap pengajaran",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 8,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "vpfjDYaZYPRTRMbbc",
                    "question": "Guru memiliki penampilan yang baik meliputi sopan, ramah, tutur kata halus dan rapi",
                    "answers": [
                      {
                        "label": "Menunjukkan 4 sikap meliputi sopan, ramah. tutur kata halus, rapi",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Hanya menunjukkan 3 sikap di antara sopan, ramah, tutur kata halus, rapi",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Hanya menunjukkan 2 sikap di antara sopan, ramah, tutur kata halus, rapi",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Hanya menunjukkan 1 sikap di antara sopan, ramah, tutur kata halus, rapi",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 9,
                    "groupId": "h5mtjuYqKJkbeggFg",
                    "sectionTitle": "PROFESIONALITAS"
                  },
                  {
                    "itemId": "Fy9ehHphjaqoQxBak",
                    "question": "Guru membagi hasil pekerjaan siswa dan melakukan pembahasan.",
                    "answers": [
                      {
                        "label": "Guru membagi hasil pekerjaan siswa tepat waktu dan melakukan pembahasan secara menyeluruh.",
                        "value": 4,
                        "order": 1
                      },
                      {
                        "label": "Guru membagi hasil pekerjaan siswa tepat waktu dan melakukan pembahasan pada beberapa soal saja.",
                        "value": 3,
                        "order": 2
                      },
                      {
                        "label": "Guru membagi hasil pekerjaan siswa tidak tepat waktu dan melakukan pembahasan pada beberapa soal saja.",
                        "value": 2,
                        "order": 3
                      },
                      {
                        "label": "Guru tidak pernah membagi hasil pekerjaan siswa dan tidak melakukan pembahasan soal.",
                        "value": 1,
                        "order": 4
                      }
                    ],
                    "ordering": 10,
                    "groupId": "kqAwBbsT9rJjrnmdu",
                    "sectionTitle": "PROFESIONALITAS"
                  }
                ],
                "order": 0
              }
            ]
          },
          "doneAt": "2022-10-11T06:38:16.441Z"
        }
      ],
      fetched: false,
      email: 'andre@gmail.com',
      phoneNumber: '081231993680',
      nis: '123',
      dob: '222',
      kelas: 'matematikaa',
      jabatan:'kepala sekolah',
      tanggallahir:'11/12/2003',
    }
  }),
  mutations:{
   
    setProfile (state, value) {
      const keyList = []
      Object.keys(state.profile).forEach((key) => {
        keyList.push(key)
      })
      Object.keys(value).forEach((key) => {
        if (value[key] && keyList.includes(key)) {
          state.profile[key] = value[key]
        }
      })
      state.profile.fetched = true
    },
  
    setFullName (state, value) {
      state.profile.fullName = value
    },
  
    setEmail (state, value) {
      state.profile.email = value
    },
  
    setPhone (state, value) {
      state.profile.phoneNumber = value
    },
    // setlistPairingfinish(state,value){
    //   console.log(value);
    //   state.profile.listPairings = state.profile.listPairings.map((obj) => {
    //     if (obj._id === value) {
    //       obj.doneAt="11/12/2003";
    //     }
    //     return obj;
    //     });
    // },
  
    setKelas (state, value) {
      state.profile.kelas = value
    },
  
    setNis (state, value) {
      state.profile.nis = value
    },
  
    setDob (state, value) {
      state.profile.dob = value
    }
  },
  actions: {
    setlistPairingfinish(value){
      console.log(value);
      this.profile.listPairings = this.profile.listPairings.map((obj) => {
        if (obj._id === value) {
          obj.doneAt="11/12/2003";
        }
        return obj;
        });
    },
  },
});
