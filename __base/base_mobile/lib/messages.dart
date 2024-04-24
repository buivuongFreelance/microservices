import 'package:base_mobile/locale/en.dart';
import 'package:base_mobile/locale/vi.dart';
import 'package:get/get.dart';

class Messages extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
        'en_US': enLocale,
        'vi_VN': viLocale,
      };
}
