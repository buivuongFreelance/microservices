import 'package:base_mobile/states/app/app_controller.dart';
import 'package:get/get.dart';

class StoreBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut(
      () => AppController(),
    );
  }
}
