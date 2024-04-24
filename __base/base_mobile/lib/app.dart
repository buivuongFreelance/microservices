import 'package:base_mobile/features/auth/routes.dart';
import 'package:base_mobile/features/error/pages/error_page.dart';
import 'package:base_mobile/features/error/routes.dart';
import 'package:base_mobile/messages.dart';
import 'package:base_mobile/routes.dart';
import 'package:base_mobile/states/store.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

GetMaterialApp getMaterialApp = GetMaterialApp(
  translations: Messages(),
  locale: const Locale('en', 'US'),
  fallbackLocale: const Locale('en', 'US'),
  unknownRoute: GetPage(
    name: ErrorRoutes.error,
    page: () => const ErrorPage(),
  ),
  getPages: appRoutes,
  initialRoute: AuthRoutes.register,
  initialBinding: StoreBinding(),
);
