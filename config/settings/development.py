from .base import *

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(REACT_BASE_DIR, 'webpack-stats.dev.json'),
        }
}

DEBUG = True
ADMIN_ENABLED = DEBUG

# redirect to index after logging in as admin
LOGIN_REDIRECT_URL = 'index'
