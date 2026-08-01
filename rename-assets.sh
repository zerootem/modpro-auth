#!/bin/bash

# الانتقال إلى مجلد assets
cd dist/assets || exit

# العثور على أسماء الملفات الفعلية
CSS_FILE=$(ls index-*.css 2>/dev/null | head -n 1)
JS_FILE=$(ls index-*.js 2>/dev/null | head -n 1)
VENDOR_FILE=$(ls vendor-*.js 2>/dev/null | head -n 1)

# إعادة التسمية إلى أسماء ثابتة
if [ -n "$CSS_FILE" ]; then
  mv "$CSS_FILE" style.css
  echo "تم إعادة تسمية $CSS_FILE إلى style.css"
fi

if [ -n "$JS_FILE" ]; then
  mv "$JS_FILE" app.js
  echo "تم إعادة تسمية $JS_FILE إلى app.js"
fi

if [ -n "$VENDOR_FILE" ]; then
  mv "$VENDOR_FILE" vendor.js
  echo "تم إعادة تسمية $VENDOR_FILE إلى vendor.js"
fi

echo "✅ تم إعادة تسمية جميع الملفات بنجاح"
