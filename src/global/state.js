import { ref, reactive } from 'vue'

const foundUsers = ref([])
const mutualFriends = ref([])
const listedUsers = reactive({
  91683: {
    id: 91683,
    track_code:
      '7f563587uUP_8H6fvNy-GUDB-iGah_mcHmKfQbkdB1qW_vzHgP7eKrSnI6vjju5HcSB0iyDvmYFqCvoz',
    photo_50:
      'https://sun9-west.userapi.com/sun9-72/s/v1/ig2/_R4pF-yD1oHCcyQV4RqRrgBbyEHFjQSCalbej_VZX1Zc5kivdMi-9V18gHhLvN0mseVK9BYGvdPxEDzJV0AWWbq9.jpg?size=50x50&quality=96&crop=0,235,720,720&ava=1',
    first_name: 'Алексей',
    last_name: 'Топунов',
    can_access_closed: true,
    is_closed: true
  },
  192134970: {
    id: 192134970,
    track_code:
      '46ea93balfkkvRKwKw-VgkBYHFdeAgDrWqVPWF_Uxz-EtP8sNV_ykDK8TdgjDpLVcovGq6YHaOVcpk9YUbK1Vg',
    photo_50:
      'https://sun9-north.userapi.com/sun9-77/s/v1/ig2/MftrA8WqjUByDGf5YiFIJgO0RGiNohemI6wnB9Hbg9hUE9TdCVNplhQOgpEfFOQ3NAvBd43XdhVyc0CPaAMOXYKY.jpg?size=50x50&quality=96&crop=360,412,884,884&ava=1',
    first_name: 'Александр',
    last_name: 'Торопчин',
    can_access_closed: true,
    is_closed: false
  }
})
const friendsInfo = ref([])

export { foundUsers, listedUsers, mutualFriends, friendsInfo }
