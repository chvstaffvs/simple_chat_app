from typing import List, Type
from pony.orm import Database
from pony.orm.core import Entity
from settings import BASE_DIR
from importlib import import_module


class Client:
    db: Database
    mappings: List[str] = []

    def bind_db(self):
        self.db = Database()
        self.db.bind(
            provider="sqlite", filename=str(BASE_DIR / "db.sqlite3"), create_db=True
        )

    @property
    def Entity(self) -> Type[Entity]:
        return self.db.Entity

    def generate_mappings(self):
        from model import Profile, Message

        self.db.generate_mapping(create_tables=True)


client = Client()