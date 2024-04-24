import 'package:base_mobile/features/auth/pages/login_page.dart';
import 'package:base_mobile/features/auth/pages/register_page.dart';
import 'package:base_mobile/features/auth/routes.dart';
import 'package:base_mobile/features/home/pages/home_page.dart';
import 'package:base_mobile/features/home/routes.dart';
import 'package:get/get.dart';

final appRoutes = [
  GetPage(name: HomeRoutes.home, page: () => const HomePage()),
  GetPage(name: AuthRoutes.login, page: () => const LoginPage()),
  GetPage(name: AuthRoutes.register, page: () => const RegisterPage()),
];
