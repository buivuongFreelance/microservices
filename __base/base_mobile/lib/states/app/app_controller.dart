import 'package:get/get.dart';

class AppController extends GetxController {
  RxBool loading = false.obs;

  showLoading() {
    loading.value = true;
  }

  hideLoading() {
    loading.value = false;
  }
}
